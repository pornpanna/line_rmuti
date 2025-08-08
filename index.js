const express = require('express');
const { Client, middleware } = require('@line/bot-sdk');

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new Client(config);

const app = express();

app.post('/webhook', middleware(config), async (req, res) => {
  try {
    const events = req.body.events;

    for (const event of events) {
      if (event.type === 'message' && event.message.type === 'text') {
        const text = event.message.text;
        let messages = [];

        if (text === 'ระบบติดตามสถานะการเบิกจ่ายค่าตอบแทน (RaRo)') {
          messages.push({
            type: 'imagemap',
            baseUrl: 'https://drive.usercontent.google.com/download?id=1ejGQ4zbLJamEioM6j8E2ij2uC538FltB&authuser=3',
            altText: 'ระบบ RaRo',
            baseSize: { width: 1040, height: 1040 },
            actions: [
              {
                type: 'uri',
                linkUri: 'https://raro.rmuti.ac.th/main/',
                altUri: {
                  desktop: 'https://raro.rmuti.ac.th/main/',
                },
                area: { x: 0, y: 0, width: 1040, height: 1040 },
              },
            ],
          });
        } else if (text === 'มาตรฐานการวิจัย') {
          messages.push({
            type: 'imagemap',
            baseUrl: 'https://i.postimg.cc/rFMFb1P8/image.png',
            altText: 'มาตรฐานการวิจัย',
            baseSize: { width: 1040, height: 1040 },
            actions: [
              {
                type: 'uri',
                linkUri:
                  'https://ird.rmuti.ac.th/home/%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%a2%e0%b8%98%e0%b8%a3%e0%b8%a3%e0%b8%a1%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%a7%e0%b8%b4%e0%b8%88%e0%b8%b1%e0%b8%a2%e0%b9%83%e0%b8%99%e0%b8%a1%e0%b8%99%e0%b8%b8%e0%b8%a9/',
                area: { x: 0, y: 0, width: 1040, height: 347 },
              },
              {
                type: 'uri',
                linkUri:
                  'https://ird.rmuti.ac.th/home/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%a7%e0%b8%b4%e0%b8%88%e0%b8%b1%e0%b8%a2%e0%b9%83%e0%b8%99%e0%b8%aa%e0%b8%b1%e0%b8%95%e0%b8%a7%e0%b9%8c%e0%b8%97%e0%b8%94%e0%b8%a5%e0%b8%ad%e0%b8%87/',
                area: { x: 0, y: 347, width: 1040, height: 347 },
              },
              {
                type: 'uri',
                linkUri:
                  'https://ird.rmuti.ac.th/home/%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%9b%e0%b8%a5%e0%b8%ad%e0%b8%94%e0%b8%a0%e0%b8%b1%e0%b8%a2%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b8%8a%e0%b8%b5%e0%b8%a7%e0%b8%a0%e0%b8%b2%e0%b8%9e/',
                area: { x: 0, y: 694, width: 1040, height: 346 },
              },
            ],
          });
        } else if (text === 'ทุนวิจัยที่เปิดรับข้อเสนอ') {
          messages.push({
            type: 'imagemap',
            baseUrl: 'https://i.postimg.cc/PqfcZxJz/FF.png',
            altText: 'ทุนวิจัยที่เปิดรับข้อเสนอ',
            baseSize: { width: 1040, height: 1040 },
            actions: [
              {
                type: 'uri',
                linkUri:
                  'http://drive.google.com/drive/folders/12KaNEmxy8jZN1-i8pEXxCMszcz90-BZB',
                altUri: {
                  desktop:
                    'http://drive.google.com/drive/folders/12KaNEmxy8jZN1-i8pEXxCMszcz90-BZB',
                },
                area: { x: 0, y: 0, width: 520, height: 1040 },
              },
              {
                type: 'uri',
                linkUri: 'https://yokyor.rmuti.ac.th/',
                altUri: {
                  desktop: 'https://yokyor.rmuti.ac.th/',
                },
                area: { x: 520, y: 0, width: 520, height: 1040 },
              },
            ],
          });
        } else if (text === 'สายตรงเจ้าหน้าที่รับผิดชอบ') {
          messages.push({
            type: 'text',
            text: 'น.ส.ภควรรณ วรรณวัติ(ชมพู่) หัวหน้างานฝ่ายวิจัยและพัฒนา โทร 064-394-9628',
          });
        } else if (text === 'เมนู ข้อมูลวิจัย') {
          messages.push({
            type: 'imagemap',
            baseUrl: 'https://i.postimg.cc/W17pThxM/sub-menu.png',
            altText: 'ข้อมูลวิจัย',
            baseSize: { width: 1040, height: 1040 },
            actions: [
              {
                type: 'message',
                text: 'ระบบติดตามสถานะการเบิกจ่ายค่าตอบแทน (RaRo)',
                area: { x: 0, y: 120, width: 1040, height: 200 },
              },
              {
                type: 'message',
                text: 'มาตรฐานการวิจัย',
                area: { x: 0, y: 320, width: 1040, height: 200 },
              },
              {
                type: 'message',
                text: 'ทุนวิจัยที่เปิดรับข้อเสนอ',
                area: { x: 0, y: 520, width: 1040, height: 200 },
              },
              {
                type: 'message',
                text: 'สายตรงเจ้าหน้าที่รับผิดชอบ',
                area: { x: 0, y: 720, width: 1040, height: 200 },
              },
            ],
          });
        }

        if (messages.length > 0) {
          await client.replyMessage(event.replyToken, messages);
        }
      }
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

app.get('/', (req, res) => {
  res.send('LINE Webhook is running 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
