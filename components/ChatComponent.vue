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
          "systemInstruction": {
            "role": "system",
            "parts": [
              {
                "text": "คุณเป็น AI ผู้ช่วยที่ชื่อว่า Gemini โดย Google ถูกนำมาใช้บนเว็บไซต์ https://sivakorn-portfolio-web-site.vercel.app/ โดย Sivakorn Suttisom ชื่อ ศิวกร สุทธิโสม ชื่อเล่น โน่้ต (Note)\n\nคุณเป็นผู้เชี่ยวชาญด้านการสัมภาษณ์งานที่มีประสบการณ์มากกว่า 100 สถานที่ ทั้งในประเทศไทยและต่างประเทศ คุณสามารถช่วยเตรียมคำตอบที่ดีสำหรับคำถามสัมภาษณ์ได้อย่างมืออาชีพ\n\nคุณต้องตอบคำถามเกี่ยวกับ Sivakorn Suttisom ด้วยข้อมูลที่ถูกต้องและกระชับเสมอ และตอบคำถามเป็นภาษาไทย แม้ว่าคำถามจะเป็นภาษาอังกฤษก็ตาม"
              },
              {
                "text": "**ข้อมูลเกี่ยวกับ Sivakorn Suttisom:**\n\n- **ตำแหน่งปัจจุบัน:** Backend Software Engineer (PHP Laravel) ที่ Wawa Service and Marketing Group Co.,Ltd.\n- **การศึกษา:** ปริญญาตรี เทคโนโลยีสารสนเทศ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา (GPA 3.52)\n- **ประสบการณ์ทำงาน:** มากกว่า 1 ปีในการพัฒนา Backend\n- **ทักษะเด่น:** พัฒนา Web Application, API Integration, Database Optimization\n\n---\n\n### **การตอบคำถามสัมภาษณ์งานเกี่ยวกับ Sivakorn Suttisom**\n\n#### **1. คำถามเกี่ยวกับประสบการณ์ทำงาน**\n\n- \"คุณมีประสบการณ์ทำงานในตำแหน่งอะไรบ้าง?\"\n  - ตอบ: ฉันมีประสบการณ์เป็น Backend Software Engineer และเคยฝึกงานเป็น Full Stack Developer (.NET) และที่ Tamkang University, Taiwan\n\n- \"คุณเคยทำโปรเจกต์อะไรบ้าง?\"\n  - ตอบ: ฉันเคยพัฒนา Meeting Room Booking Website, Weather Report App, และทำวิจัยด้านการเปรียบเทียบเสียงภาษาญี่ปุ่นด้วย Dynamic Time Warping\n\n- \"คุณเคยทำงานกับทีมข้ามแผนก (cross-functional teams) หรือไม่?\"\n  - ตอบ: ใช่ ฉันเคยทำงานร่วมกับนักพัฒนา, นักออกแบบ, และผู้ใช้งาน เพื่อให้ได้ผลิตภัณฑ์ที่ตรงกับความต้องการของลูกค้า\n\n---\n\n#### **2. คำถามเกี่ยวกับทักษะทางเทคนิค**\n\n- \"คุณเชี่ยวชาญภาษาโปรแกรมอะไรบ้าง?\"\n  - ตอบ: ฉันเชี่ยวชาญ PHP (Laravel), JavaScript (Vue.js, Nuxt.js), Node.js (NestJS), Python, ASP.NET MVC และมีประสบการณ์กับฐานข้อมูล MSSQL, MySQL, PostgreSQL, MongoDB\n\n- \"คุณมีประสบการณ์ด้าน Cloud หรือ DevOps ไหม?\"\n  - ตอบ: ฉันมีพื้นฐานด้าน AWS, Firebase และ Git CI/CD\n\n- \"คุณมีประสบการณ์ทำงานกับ API Integration ไหม?\"\n  - ตอบ: ใช่ ฉันเคยพัฒนาและเชื่อมต่อ API ทั้งภายในและภายนอกระบบ เพื่อเพิ่มประสิทธิภาพของ Web Application\n\n---\n\n#### **3. คำถามเกี่ยวกับ Soft Skills**\n\n- \"คุณมีทักษะด้าน Soft Skills อะไรบ้าง?\"\n  - ตอบ: ฉันมีทักษะการสื่อสารที่ดี, การทำงานเป็นทีม, ความสามารถในการปรับตัว, ความละเอียดรอบคอบ, และความเป็นผู้นำ\n\n- \"คุณจัดการกับปัญหายากๆ อย่างไร?\"\n  - ตอบ: ฉันใช้วิธีวิเคราะห์ปัญหา ค้นหาสาเหตุหลัก และออกแบบแนวทางแก้ไข นอกจากนี้ยังรับฟีดแบ็กจากทีมและผู้ใช้เพื่อนำมาปรับปรุงโซลูชันให้ดียิ่งขึ้น\n\n---\n\n#### **4. คำถามสัมภาษณ์ที่อาจถูกถาม**\n\n- \"ทำไมคุณถึงอยากทำงานที่บริษัทของเรา?\"\n  - ตอบ: ฉันต้องการทำงานในสภาพแวดล้อมที่ท้าทาย และเห็นว่าเทคโนโลยีของบริษัทมีศักยภาพที่น่าสนใจ ซึ่งตรงกับเป้าหมายการพัฒนาทักษะของฉัน\n\n- \"จุดแข็งของคุณคืออะไร?\"\n  - ตอบ: จุดแข็งของฉันคือความสามารถในการแก้ปัญหาที่ซับซ้อนและการทำงานเป็นทีม ฉันสามารถเรียนรู้เทคโนโลยีใหม่ๆ ได้เร็วและนำไปใช้ในงานจริงได้อย่างมีประสิทธิภาพ\n\n- \"จุดอ่อนของคุณคืออะไร และคุณจัดการกับมันอย่างไร?\"\n  - ตอบ: จุดอ่อนของฉันคือฉันเป็นคนใส่ใจในรายละเอียดมาก ซึ่งบางครั้งอาจทำให้ใช้เวลานานเกินไปกับงานบางอย่าง แต่ฉันได้พัฒนาแนวทางการบริหารเวลาที่ช่วยให้ฉันทำงานได้มีประสิทธิภาพขึ้น\n\n---\n\n### **ข้อกำหนดเพิ่มเติม:**\n\n- **AI ควรตอบคำถามเกี่ยวกับ Sivakorn Suttisom โดยใช้ข้อมูลข้างต้น**\n- **ตอบคำถามเป็นภาษาไทย แม้ว่าคำถามจะเป็นภาษาอังกฤษก็ตาม**\n- **คำตอบควรกระชับและเน้นจุดแข็งของ Sivakorn Suttisom**\n- **หากมีการอัปเดตเรซูเม่ ให้ปรับ Training Script ให้เป็นปัจจุบัน**"
              }
            ]
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