import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import axios from "axios"
import img_path from './image0.jpg';
import img_path2 from './image1.jpg';
import img_path3 from './image2.jpg';
import img_path4 from './image3.jpg';
import { TextField } from "@material-ui/core";
import * as Drag from './Drag.js'



const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height:100%;
  background-color: ${props => props.isLoading ? 'gray' : '#f5f5f5'};
`;

const Stylew = styled.div`
   width:100px; 
   height:100px;
`;


const Spinner = styled.div`
/* 스피너의 스타일 */
width: 140px;
height: 140px;
border: 25px solid rgba(0, 0, 0, 0.1);
border-left-color: #000000;
border-radius: 50%;

/* 가운데로 위치시키기 */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

/* 회전 애니메이션 보이기 */
-webkit-backface-visibility: hidden; /* Safari, Chrome, Opera */
backface-visibility: hidden; /* Firefox, IE, Edge */

/* 회전 애니메이션 */
animation: spin 1s linear infinite;

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

`;

const Product = () => {
  const [keyWord, setKeyWord] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [stylDetail, setInfo] = useState('');
  const [styl_info1, setInfo1] = useState('');
  const [styl_info2, setInfo2] = useState('');
  const [styl_info3, setInfo3] = useState('');
  const [styl_info4, setInfo4] = useState('');
  // const [img_path, setImgPath] = useState('');
  //const [img_path2, setImgPath2] = useState('');
  //const [img_path3, setImgPath3] = useState('');
  //const [img_path4, setImgPath4] = useState('');
  const [review_result, setReview_result] = useState('');
  const [review_result1, setReview_result1] = useState('');
  const [review_result2, setReview_result2] = useState('');
  const [review_result3, setReview_result3] = useState('');
  const [review_result4, setReview_result4] = useState('');
  const [selectText1, setSelectText1] = useState('');
  const [selectText2, setSelectText2] = useState('');
  const [selectText3, setSelectText3] = useState('');
  const [selectText4, setSelectText4] = useState('');
  const [selectText5, setSelectText5] = useState('');
 

  const [isLoading, setLoading] = useState(false);
  

//input에 입력될 때마다 account state값 변경되게 하는 함수
  const onChangeStylCd = (event) => { setKeyWord(event.target.value);}
  const onChangeText1 = (event) => { setText1(event.target.value);}
  const onChangeText2 = (event) => { setText2(event.target.value);}
  const onChangeText3 = (event) => { setText3(event.target.value);}
  
  
  const clicked1 = (e) => {
    setLoading(true);
    axios.get("http://127.0.0.1:8000/product",  {
      params: {
        styl_cd: keyWord,
        mnfg_dtl_cntn1: text1,
        mnfg_dtl_cntn2: text2,
        mnfg_dtl_cntn3: text3,
      }
  }) 
    .then(function (response) {
      var styl_info = response.data["stylDetail"]
      console.log(response.data);
      setInfo(styl_info);
      setInfo1(response.data["stylDetail"]);
      setInfo2(response.data["styl_info2"]);
      setInfo3(response.data["styl_info3"]);
      setInfo4(response.data["styl_info4"]);
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    })
    ;
  }


  const clicked2 = (e) => {
    setLoading(true);
    axios.get("http://127.0.0.1:8000/review",  {
      params: {
        styl_cd: keyWord,
      }
  }) 
    .then(function (response) {
      
      console.log(response.data);
      setReview_result(response.data["review_result"]);
      setReview_result1(response.data["review_result"]);
      setReview_result2(response.data["review_result2"]);
      setReview_result3(response.data["review_result3"]);
      setReview_result4(response.data["review_result4"]);
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }


  const clicked3 = (e) => {
    setLoading(true);
    
    axios.get("http://127.0.0.1:8000/image",  {
      params: {
        styl_cd: keyWord
      }
      })
      .then(function (response) {
        console.log(response.data);
        var imgList = response.data["img_path"];
        console.log(response.data["img_path"]);
        console.log(imgList[0]);
        console.log(imgList[1]);
        console.log(imgList[2]);
        console.log(imgList[3]);
        
        // setImgPath(imgList[0]);
        //setImgPath2(imgList[1]);
        //setImgPath3(imgList[2]);
        //setImgPath4(imgList[3]);
        document.getElementById("image_content_div").style.display = "block";
        document.getElementById("image_content_img").style.display = "block";
        document.getElementById("image_content_div2").style.display = "block";
        document.getElementById("image_content_img2").style.display = "block";
        document.getElementById("image_content_div3").style.display = "block";
        document.getElementById("image_content_img3").style.display = "block";
        document.getElementById("image_content_div4").style.display = "block";
        document.getElementById("image_content_img4").style.display = "block";
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
    

  const selecttextbutton = (e) => {
    var getText = document.getElementById("console").innerHTML
    axios.get("http://127.0.0.1:8000/selecttext",  {
      params: {
        select_text: getText,
      }
  }) 
    .then(function (response) {
      var selectTextList = response.data["selecttexts"];
      setSelectText1(selectTextList[0]);
      setSelectText2(selectTextList[1]);
      setSelectText3(selectTextList[2]);
      setSelectText4(selectTextList[3]);
      setSelectText5(selectTextList[4]);
      document.getElementById("text_box1").style.display = "block";
      document.getElementById("text_box2").style.display = "block";
      document.getElementById("text_box3").style.display = "block";
      document.getElementById("text_box4").style.display = "block";
      document.getElementById("text_box5").style.display = "block";
      console.log(response.data);
      //setImgPath(response.data["img_path"]);
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const changetextbutton = (e) => {
    document.getElementById("changebutton").style.display = "none";
    document.getElementById("savebutton").style.display = "block";
    document.getElementById("detail_content").style.display = "none";
    document.getElementById("detail_content_text").value = document.getElementById("detail_content").innerHTML;
    document.getElementById("detail_content_text").style.display = "block";

  }

  const savetextbutton = (e) => {
    document.getElementById("savebutton").style.display = "none";
    document.getElementById("changebutton").style.display = "block";
    document.getElementById("detail_content").innerHTML = document.getElementById("detail_content_text").value;    
    document.getElementById("detail_content").style.display = "block";
    document.getElementById("detail_content_text").style.display = "none";

  }

  

  const transClick = (info, reviewInfo) => {
    setInfo(info);
    setReview_result(reviewInfo);
  };

    return (
        <div  class="product_div" >
            <div style={{border:"1px solid green"}}>
                <form >
                  <TextField label="STYLE_CD" class="subtitle1" name='search' onChange={onChangeStylCd} />
                  <TextField label="KEYWORD_1" class="subtitle2" name='search' onChange={onChangeText1}/>
                  <TextField label="KEYWORD_2" class="subtitle3" name='search' onChange={onChangeText2}/>
                  <TextField label="KEYWORD_3" class="subtitle4" name='search' onChange={onChangeText3}/>
                </form>
                <div>
                    <button className='search_button1' onClick={clicked1}>CLICK</button>
                    {isLoading && <div className='spinner'><Spinner />Loading...</div>}
                </div>
                <div>
                    <button id="changebutton" className='change_text_button' onClick={changetextbutton}>CHANGE</button>
                    <button id="savebutton" className='save_text_button' onClick={savetextbutton}>SAVE</button>
                </div>
                <div>
                    <button className='search_button2' onClick={clicked2}>CLICK</button>
                    {isLoading && <div className='spinner'><Spinner />Loading...</div>}
                </div>
            </div>

          
            <div class="shadow_box" />
            <div class="shadow_text">STYLE IMAGE</div>
            <div>
                <button className='search_button3' onClick={clicked3}>CLICK</button>
                {isLoading && <div className='spinner'><Spinner />Loading...</div>}
            </div>
            <div class="image_box" style={{border:"3px solid #262626"}}/>
            <div id="image_content_div" class="image_content"><img src={img_path} id="image_content_img" class="image_content"/></div>
            
            
            <div id="image_content_div2" class="image_content2"><img src={img_path2} id="image_content_img2" class="image_content2"/></div>
            <div id="image_content_div3" class="image_content3"><img src={img_path3} id="image_content_img3" class="image_content3"/></div>
            <div id="image_content_div4" class="image_content4"><img src={img_path4} id="image_content_img4" class="image_content4"/></div>
            
            <div class="item_translation1" onClick={() => transClick(styl_info1, review_result1)}>KOR</div>
            <div class="item_translation2" onClick={() => transClick(styl_info2, review_result2)}>JAP</div>
            <div class="item_translation3" onClick={() => transClick(styl_info3, review_result3)}>CHI</div>
            <div class="item_translation4" onClick={() => transClick(styl_info4, review_result4)}>ENG</div>
      
            <div class="item_detail">■ ITEM DETAIL</div>
            <div id="detail_content" class="item_detail_content target">{stylDetail}</div>
            <textarea id="detail_content_text" class="item_detail_content target textarea"></textarea>
            <div class="item_select">■ ITEM SELECT</div>
            <div>
                    <button className='select_text_button' onClick={selecttextbutton}>CLICK</button>
                    {isLoading && <div className='spinner'><Spinner />Loading...</div>}
            </div>
            <button class="item_select_content" id="console"></button>
            <button id="text_box1" class="select_text_box1">{selectText1}</button>
            <button id="text_box2" class="select_text_box2">{selectText2}</button>
            <button id="text_box3" class="select_text_box3">{selectText3}</button>
            <button id="text_box4" class="select_text_box4">{selectText4}</button>
            <button id="text_box5" class="select_text_box5">{selectText5}</button>
            
            <div class="item_line"/>
            <div class="item_review">■ ITEM REVIEW</div>
            <div class="item_review_content">{review_result}</div>
            <div class="product_footer"/>
            
        </div>
    
    
  );
};


export default Product;