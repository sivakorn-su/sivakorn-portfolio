<template>
  <div class="flex flex-col h-96 w-96 max-w-2xl border border-gray-200 rounded-lg overflow-hidden mx-auto">
    <div class="flex-1 overflow-y-auto p-4 bg-gray-50" ref="messagesContainer">
      <div v-for="(message, index) in conversationStore.conversationList" :key="message.id"
           :class="['mb-3 flex', message.isUser ? 'justify-end' : 'justify-start']">
        <div v-if="message.isUser" :class="['max-w-[70%] rounded-lg px-3 py-2 bg-blue-500 text-white']">
          <div class="text-xs font-semibold mb-1">You</div>
          <div>{{ message.question }}</div>
          <div class="text-xs mt-1 text-right text-blue-100">
            {{ formatTime(message.time) }}
          </div>
        </div>
        <div v-else :class="['max-w-[70%] rounded-lg px-3 py-2 bg-white border border-gray-200']">
          <div class="text-xs font-semibold mb-1">Note by Gemini</div>
          <div v-html="message.answer"></div>
          <div class="text-xs mt-1 text-right text-blue-100">
            {{ formatTime(message.time) }}
          </div>
        </div>
      </div>
      <div v-if="isLoading" class="flex justify-start mb-3">
        <div class="bg-white border border-gray-200 rounded-lg px-3 py-2">
          <div class="flex space-x-2">
            <div class="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
            <div class="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-100"></div>
            <div class="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex p-3 bg-white border-t border-gray-200">
      <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Type a message..."
          type="text"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2"
          :disabled="isLoading"
      />
      <button
          @click="sendMessage"
          class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-blue-300"
          :disabled="isLoading"
      >
        Send
      </button>
    </div>
  </div>

</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import { marked } from 'marked';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';

const sivakornSystemInstructionParts = [
  {
    text: `คุณเป็น AI ผู้ช่วยบนเว็บไซต์ portfolio ของ Sivakorn Suttisom ชื่อเล่น Note

หน้าที่ของคุณ:
- ตอบคำถามเกี่ยวกับ Sivakorn Suttisom ด้วยข้อมูลที่ถูกต้อง กระชับ และเป็นภาษาไทย
- หากผู้ใช้ถามเป็นภาษาอังกฤษ ให้ตอบเป็นภาษาไทยโดยยังคง technical terms ภาษาอังกฤษได้
- ห้ามเปิดเผยเบอร์โทรหรืออีเมลส่วนตัว ให้แนะนำ LinkedIn และ GitHub แทน`
  },
  {
    text: `ข้อมูลล่าสุดจาก Resume:

- ชื่อ: Sivakorn Suttisom
- ชื่อเล่น: Note
- ตำแหน่งปัจจุบัน: Software Developer ที่ Zenith Comp ตั้งแต่ April 2025 - Present
- ภาพรวม: Full-Stack Developer ที่มีประสบการณ์มากกว่า 2 ปีในการออกแบบและพัฒนา production-grade web applications ทั้ง backend และ frontend
- การศึกษา: B.Sc. Information Technology, Kasetsart University Sriracha Campus, GPA 3.52
- ประสบการณ์ก่อนหน้า: Backend Software Engineer (PHP Laravel) ที่ Wawa Service and Marketing Group Co., Ltd. ระหว่าง May 2023 - February 2025, Cooperative Education Student ที่ Tamkang University, และ Full Stack Developer Intern (.NET) ที่ BLCP Power Co., Ltd.
- ทักษะหลัก: HTML, CSS, JavaScript, PHP, Python, SQL, Vue.js, Nuxt.js, Next.js, React.js, Svelte, Laravel, FastAPI, ASP.NET MVC, Tailwind CSS, MSSQL, MySQL, PostgreSQL, Git, CI/CD, Docker, Cloudflare, AWS S3
- โปรเจกต์เด่น: AI chatbot platform รองรับผู้ใช้พร้อมกันสูงสุด 1,000 คน, image generation tools, credit-based usage system, Agentic AI with function calling, API Gateway ด้วย .NET, HR Management System, Researcher Management System, Meeting Transcription & Speaker Diarization System, Thaikk-Shop E-Commerce Platform, Weather Report Application, และ Japanese Sound Comparison via Dynamic Time Warping
- Soft skills: communication, adaptability, collaboration, initiative, attention to detail`
  }
];

export const useConversationStore = defineStore('conversationStore', {
  state: () => ({
    conversationList: [
      {
        id: Math.random(),
        time: new Date(),
        question: '',
        originText: 'How can I assist you today?',
        answer: 'How can I assist you today?',
        isAnswerLoading: true,
        isUser: false
      }
    ],
    chatHistory: [{ text: 'Hello' }],
    responseHistory: [{ text: 'Great to meet you' }],
    chatIndex: Math.random() * 1000000000000000000,
    chatList: [{
      id: Math.random() * 1000000000000000000,
      chatHistory: [{ text: 'Hello' }],
      responseHistory: [{ text: 'Great to meet you' }],
      chatItem: [],
      title: ''
    }]
  }),
  actions: {
    async addConversation(question) {
      console.log(question);
      const conversationItem = {
        id: Math.random(),
        time: new Date(),
        question: question,
        originText: '',
        answer: '',
        isAnswerLoading: true,
        isUser: true
      };

      this.conversationList.push(conversationItem);

      try {
        const conversation = await this.multipleConversation(question);

        const itemIndex = this.conversationList.findIndex(item => item.id === conversationItem.id);
        if (itemIndex !== -1) {
          this.conversationList[itemIndex].question = conversation.question;
          this.conversationList[itemIndex].originText = conversation.originText;
          this.conversationList[itemIndex].answer = conversation.answer;
          this.conversationList[itemIndex].isAnswerLoading = false;
        }

        // Add AI response
        this.conversationList.push({
          id: Math.random(),
          time: new Date(),
          question: '',
          originText: conversation.originText,
          answer: conversation.answer,
          isAnswerLoading: false,
          isUser: false
        });

        // Update chat list
        const chatListIndex = this.chatList.findIndex(item => item.id === this.chatIndex);
        if (chatListIndex !== -1) {
          this.chatList[chatListIndex].title = this.chatList[chatListIndex].title || question;
          this.chatList[chatListIndex].chatItem = [...this.conversationList];
          this.chatList[chatListIndex].chatHistory = this.chatHistory;
          this.chatList[chatListIndex].responseHistory = this.responseHistory;
        }
      } catch (error) {
        console.error('Error in conversation:', error);
        const itemIndex = this.conversationList.findIndex(item => item.id === conversationItem.id);
        if (itemIndex !== -1) {
          this.conversationList[itemIndex].answer = marked('Error: Unable to get response');
          this.conversationList[itemIndex].isAnswerLoading = false;
        }
      }
    },

    async multipleConversation(question) {
      // Use the runtime config API key from Nuxt
      const runtimeConfig = useRuntimeConfig();
      const apiKey = runtimeConfig.public.apiKey;

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      let code = 200;
      let text = '';

      try {
        const chat = model.startChat({
          history: [
            {
              role: 'user',
              parts: this.chatHistory
            },
            {
              role: 'model',
              parts: this.responseHistory
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024
          },
          systemInstruction: {
            role: 'system',
            parts: sivakornSystemInstructionParts
          }
        });

        const result = await chat.sendMessage(question);
        const response = await result.response;
        text = response.text();

        this.chatHistory.push({ text: question });
        this.responseHistory.push({ text });
      } catch (error) {
        text = 'Response error: ' + error;
        console.error(error);
        code = 500;
      }

      return {
        id: Math.random(),
        time: new Date(),
        question,
        originText: text,
        answer: marked(text),
        code
      };
    },

    clearConversation() {
      this.chatList = [{
        id: this.chatIndex,
        chatHistory: [{ text: 'Hello' }],
        responseHistory: [{ text: 'Great to meet you' }],
        chatItem: [],
        title: ''
      }];
      this.conversationList = [];
      this.chatHistory = [{ text: 'Hello' }];
      this.responseHistory = [{ text: 'Great to meet you' }];
    },

    createChat() {
      if (this.chatList[this.chatList.length - 1].chatItem.length === 0) {
        return;
      }

      this.chatIndex = Math.random() * 1000000000000000000;

      this.chatList.push({
        id: this.chatIndex,
        chatHistory: [{ text: 'Hello' }],
        responseHistory: [{ text: 'Great to meet you' }],
        chatItem: [],
        title: ''
      });

      this.conversationList = [];
    }
  }
});

export default {
  name: 'ChatComponent',
  setup() {
    const conversationStore = useConversationStore();
    const newMessage = ref('');
    const isLoading = ref(false);
    const messagesContainer = ref(null);

    // Function to handle sending messages
    const sendMessage = async () => {
      if (newMessage.value.trim() === '' || isLoading.value) return;

      const message = newMessage.value;
      newMessage.value = '';
      isLoading.value = true;
      try {
        await conversationStore.addConversation(message);
      } finally {
        isLoading.value = false;
        nextTick(() => {
          scrollToBottom();
        });
      }
    };

    // Function to format time
    const formatTime = (date) => {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Function to scroll to bottom of chat
    const scrollToBottom = () => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    };

    // On component mount
    onMounted(() => {
      // Initialize with an empty chat if none exists
      if (conversationStore.conversationList.length === 0) {
        conversationStore.createChat();
      }
    });

    return {
      conversationStore,
      newMessage,
      isLoading,
      sendMessage,
      formatTime,
      scrollToBottom,
      messagesContainer
    };
  }
}
</script>
