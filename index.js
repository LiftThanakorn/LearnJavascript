function appendImageElem(keyword, index){         // ฟังชั่นค้นหารูปตามคีย์เวิร์ด 
    const imgElem = document.createElement('img');  // สร้าง Element ของ img
    imgElem.src = `https://source.unsplash.com/400x255/?${keyword}&sig=${index}`;    // index คือช่วยให้ค้นหารูปไม่ซ้ำกัน

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);   //add element imgElem เป็นลูกของ gallery เพื่อแสดงรูปภาพ
}

function removePhoto(){
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

function searchPhoto(event){            //
    const keyword = event.target.value; //ค่าที่ user พิมพ์ปัจจุบัน

    if(event.key === 'Enter' && keyword){       // เช็คว่า user กด endter รึเปล่า ถ้าใช่จะแอดรูปภาพเข้าไป และเช็คว่า user ไม่ใส่ค่าว่าง
        removePhoto();                          // ทุกครั้ง user กด endter ลบรูปภาพเดิมแล้วแสดงรูปภาพใหม่ ตาม keyword
        for(let i = 1; i <= 9; i++){            //  ให้แสดงรูปภาพตามคีย์เวิร์ด 9 รูป
        appendImageElem(keyword, i);
    }
  }
}

 function run(){

    const inputElem = document.querySelector('input');          //ดึงตัว input ฟิล์ดมา แล้วแอดอีเวนท์ คีย์ดาวน์ แล้วให้เรียกฟังชั่น searchPhoto 
    inputElem.addEventListener('keydown', searchPhoto);  

    } 

run(); 