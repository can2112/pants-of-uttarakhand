"use client";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  const handleDownload = async () => {
    const res = await fetch("pdf/familyTree.pdf");
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "file.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <>
      <Navbar />
      <div className="home-container bg-blue-100 p-5 min-h-screen  shadow-md h-full">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">सुस्वागतम</h1>
        <p className="text-gray-700">
          विद्वानों के अनुसार पद्म पुराण के स्वर्ग खण्ड अध्याय ३५ में पंक्तिपावन
          विप्र का उल्लेख किया है, जिसका उन्होंने शाब्दिक अर्थ पंत ब्राह्मण लिखा
          है।
        </p>

        <p className="text-gray-700 mt-5 bg-blue-100 ">
          पण्डित त्रिलोचन पंत जी के अनुसार पुराणों में यह वर्णन है कि चन्द्रवंशी
          राजा गाधि के गुरू भृगुवंशी महर्षि ़़ऋचीक थे। महर्षि ऋचीक ने पुत्रेष्टि
          यज्ञ किया और चर्मविद्या विभक्त करके अपनी ब्राह्मणी को और राजमहिषी
          (महारानी) को खाने को दिया किन्तु संयोगवश सत्यवती ब्राह्मणी का भाग
          राजमहिषी ने खा लिया और राजमहिषी का भाग ब्राह्मणी ने खा लिया। सत्यवती
          ब्राह्मणी यह जानने के बाद चिन्तित हो गई। महर्षि ने ब्राह्मणी को वरदान
          दिया कि आपका पुत्र ब्रह्मतेज युक्त होगा और पौत्र क्षात्र कर्मा होगा।
          गाधि राजा के पुत्र विश्वामित्र और महर्षि ऋचीक के दो पुत्र जमदग्नि और
          भारद्वाज हुए। जमदग्नि के पुत्र परशुराम क्षात्र कर्मा हुए और भारद्वाज
          के पुत्र द्रोणाचार्य क्षत्रियों के युद्ध विद्या के गुरू हुए। द्रोण
          पुत्र अश्वत्थामा युद्ध विद्या में प्रख्यात हुए। भारद्वाज के कनिष्ठ
          पुत्र मुकेतन महर्षि हुए। ये भारद्वाज (भार्गव) ब्राह्मण नर्मदा के तीर
          महिष्मती नगर में यदुवंशी राजाओं के धर्नुविद्या के गुरू होकर निवास करते
          रहे। जिस कालखण्ड में भगवान परशुराम ने महिष्मती के चक्रवर्ती राजा कार्त
          वियोज्यन को पराजित किया तब ये ब्राह्मण सहयार्दि के सुरक्षित स्थानों पर
          चले गये। कार्त वियोज्यन के पुत्र जयध्वज और तालध्वज ने सहयार्दि का
          प्राच्य भूभाग जो कालान्तर में कोंकण के नाम से प्रसिद्ध हुआ, इन
          ब्राह्मणों को प्रदान किया। कालान्तर में चन्द्रवंशी राजकुमार ने कोंकण
          प्रदेश का शासन अपने हाथ में ले लिया और भार्गव को मंत्री पद पर आसीन कर
          दिया। देवगढ़ के यदुवंशी राजा ने शाके ८८४ में कोंकण निवासी श्रीकृष्ण जी
          को गोदावरी नदी के निकट हिम्बरा गांव में बसाया। कुलश्रेष्ठ ब्राह्मण को
          उनके उत्कृष्ट मार्गदर्शन के कारण पंक्ति में प्रथम स्थान मिलता था,
          जिससे पंक्तिपावन की उपाधि मिली और हिमाड़ पंत के नाम से जाने जाते रहे।
          कृष्णजी कृष्णोपासक और मोदी महाराष्ट्रीय लिपि के उत्पादक हुए। इन्होंने
          श्रीकृष्ण भक्ति में रत होकर रमावल्लभदास की पदवी धारण की। इनकी बनाई
          कृष्णाष्टमी व्रतकथा का महाराष्ट्र में बडी श्रृद्धा एवं भक्ति भाव से
          कीर्तन होता है। इन्होनें श्री बद्रीनाथ जी के दर्शन किये। इनके बनाए भजन
          श्री बद्रीनाथ जी की स्तुति मराठी भाषा में है। श्रीकृष्ण जी के पुत्र को
          राजभवन का गुरू और पुस्तैनी लेखक नियुक्त किया गया। क्रूर मुसलमान शासक
          अलाउद्दीन खिलज़ी ने सन् १३00 के आस पास जब देवगढ़ पर आक्रमण किया और
          तत्कालीन राजा शंकरदेव को मार डाला और हिन्दुओं को अनेकानेक प्रकार से
          परेशान किया और धर्मपरिवर्तन कर मुसलमान बनने पर विवश किया तो दक्षिण
          भारत, गुजरात और उत्तर प्रदेश के मैदानी क्षेत्रों के कुछ ब्राह्मणवर्ग
          पर्वतीय क्षेत्रों के हिन्दू राज्यों में सुरक्षा हेतु चले गये। इसी
          परिपेक्ष्य में हिमाड़ पंत जयदेव भी अपने साले पाराशर गोत्रीय पंत दिनकर
          राव (नीलमणि पंत भी कहा जाता है) के साथ श्री बद्रीनाथ यात्रा के लिए
          कूर्मांचल आये।
        </p>
        <div
          className="mt-8 inline-block px-6 py-3 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          onClick={() => {
            handleDownload();
          }}
        >
          Download PDF
        </div>
      </div>
    </>
  );
};

export default Home;
