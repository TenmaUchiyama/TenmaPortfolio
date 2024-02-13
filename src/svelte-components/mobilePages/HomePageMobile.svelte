<script lang="ts">
    import image from '/portfolio-media/profile-pic.jpg'
    import github from '/portfolio-media/Icon/github.svg'
    import linkedin from '/portfolio-media/Icon/linkedin.svg'
    import X from '/portfolio-media/Icon/X.svg'
    import contents from "@page-contents/contents/homeContent.json"
    import { displayLanguage } from '@/store/store'

    let content : any = contents;

    </script> 
    

    <main class="main">

        <div class="profile">
            <h1>{content["home-content-greeting"][$displayLanguage]}</h1>
            <img class="profile-pic" src={image} alt=""> 
            <h1 style="font-size: xx-large; ">{content["home-content-name"][$displayLanguage]}</h1>
            <h3 style="margin-bottom:10px;">{content["home-intro-school"][$displayLanguage]}</h3>
        
            <li class="sns-icons">
                <a href="https://github.com/TenmaUchiyama"><img class="icon" src={github} alt=""></a>
                <a href="https://linkedin.com/in/tenma-uchiyama-598103215"><img class="icon" src={linkedin} alt=""></a>
                <a href="https://x.com/TenmaU1018?s=20"><img class="icon" src={X} alt=""></a>
            </li>
        </div>
    
    
        <div class="introduction">
            <h2>{content["home-label-introduction"][$displayLanguage]}</h2>
            <ul>
                <li><b><u>{content["home-label-birthdate"][$displayLanguage]}</u></b>: {content["home-content-birthdate"][$displayLanguage]}</li>
              <li><b><u>{content["home-label-job"][$displayLanguage]}</u></b>：学生</li>
                   <li><b><u>{content["home-label-school"][$displayLanguage]}</u></b>: {content["home-content-school"][$displayLanguage]}</li>
               <li><b><u>{content["home-label-interests"][$displayLanguage]}</u></b>: {content["home-content-interests"][$displayLanguage]}</li>
                 <li ><b><u>{content["home-label-hobby"][$displayLanguage]}</u></b>: 
                    <ul class="hobby">
                      {#each content["home-content-hobby"][$displayLanguage] as element}
                       <li>{element}</li>
                      {/each}
                    </ul>
                </li>
            </ul>
        </div>
    </main>
    
    <style>

.main{
    overflow-y: scroll;
    height: 100vh;
    width: 100vw; /* 幅をビューポートの幅に設定 */
}


.profile
{
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}




h1 {
margin-top:20px;
font-size: 2.5em;
line-height: 1.1;
}

   
    
.profile-pic {

width: 80vw; /* または任意のサイズ */
height: 80vw;
border-radius: 50%; /* これで丸くなる */
border: 2px solid #ccc; /* 枠線を追加（オプション） */
object-fit: cover; /* 画像が枠に合わせて調整される */
}

.sns-icons {
margin-top: 0;
list-style: none;
display: flex;
justify-content: center;
gap:20px;

}
.sns-icons a img{
text-decoration: none;
width: 2.5rem;
}


.introduction{
padding: 10px; 
margin: 10px;
height: auto;
text-align: left;
padding-bottom: 50%;

}

.introduction ul {
list-style-type: none; /* リストのマーカー（点）を削除 */
padding: 0; /* パディングを削除 */
font-size: 1.4rem;

}

.introduction li {
margin-bottom: 10px; /* リストアイテムの間隔 */
}

.hobby {
margin-left: 20%;

}
.hobby li{
list-style-type: disc;
font-size: large;
}




    </style>