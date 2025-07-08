<script lang='ts'>
import image from '/portfolio-media/profile-pic.jpg'
    import github from '/portfolio-media/Icon/github.svg'
    import linkedin from '/portfolio-media/Icon/linkedin.svg'
    import X from '/portfolio-media/Icon/X.svg'
	import { displayLanguage } from '@/store/store';
	import contents from '@page-contents/contents/homeContent.json'


	let content :any = contents
</script>


<main class="main">

	<div class="profile">
		<h1>{content["home-content-greeting"][$displayLanguage]}</h1>
        <img class="profile-pic" src={image} alt=""> 
        <h1 style="font-size: xx-large; ">{content["home-content-name"][$displayLanguage]}</h1>

        <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin: 20px 0;">
  <!-- 🇯🇵 日本 -->
  <img src="flags/japan.svg" width="60" height="40" alt="Japan Flag" />

  <!-- ➡️ -->
  <img src="flags/arrow.svg" width="30" height="30" alt="arrow" />

  <!-- 🇺🇸 アメリカ -->
  <img src="flags/usa.svg" width="60" height="40" alt="USA Flag" />

  <!-- ➡️ -->
  <img src="flags/arrow.svg" width="30" height="30" alt="arrow" />

  <!-- 🇹🇭 タイ -->
  <img src="flags/thailand.svg" width="60" height="40" alt="Thailand Flag" />

  <!-- ➡️ -->
  <img src="flags/arrow.svg" width="30" height="30" alt="arrow" />

  <!-- 🇬🇧 イギリス -->
  <img src="flags/uk.svg" width="60" height="40" alt="UK Flag" />

  <!-- ➡️ -->
  <img src="flags/arrow.svg" width="30" height="30" alt="arrow" />

  <!-- 🇯🇵 日本（再び） -->
  <img src="flags/japan.svg" width="60" height="40" alt="Japan Flag" />
</div>


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
.main {
    display: flex;
    width: 100%;
	height: auto;
      padding-top: 30px;
  padding-bottom: 30px;
}

.profile, .introduction {
    width: 50%;
}

.profile
{
    height: auto ;
    text-align: center;

}



h1 {
font-size: 3.0em;
line-height: 1.1;
} 

   
 
.profile-pic {

width: 17vw; 
height: 17vw;
border-radius: 50%; 
border: 2px solid #ccc; 
object-fit: cover; 
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

.introduction
{
	padding-right: 50px;
}

.introduction ul 
{
	list-style-type: none;
	font-size: large;
}

.introduction ul li {
  margin-bottom: 12px; /* 各項目の下に余白を追加 */
}

.hobby
{
	padding-left: 50px; 
}
.hobby li{
list-style-type: disc;
font-size: large;
}
</style>