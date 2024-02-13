<script>
	import logo from '/logo.svg';
	import backBtn from '/portfolio-media/Icon/back.svg'
	import { displayLanguage } from '@/store/store';
	import {isMonitorOpen} from "@/store/store"


	const onBackBtnClicked = () => {

      isMonitorOpen.closePage()

}
</script>

<nav class="navbar" style="padding-left: 10px; padding-right: 10px;">
	
	
	<div class="logo">
		<img src={logo} alt="">
		<h1>Tenma</h1>
	</div>
	<div id='selector'>
		<select  class="form-select" style='height:40px;' bind:value={$displayLanguage}>
			<option selected value="ja">日本語</option>
			<option value="en">English</option>
			<option value="th">ไทย</option>
		</select>
	</div>
	<img class="back" src={backBtn}  on:click={onBackBtnClicked}>	

  </nav>

  
  

<slot />

<style>

.back {
	width: 40px;
	background-color: white;
	border-radius: 50%;
	position: absolute;
	top: 110px;
	left: 10px;
}
.navbar {
    width: 100%; 
	height: 100px;
    z-index: 1000; 
	background-color: white;
	padding:0; 
	margin: 0;
}


@media (max-width: 500px) {
    .back {
	width: 40px;
	background-color: white;
	border-radius: 50%;
	position: absolute;
	top: 70px;
	left: 10px;
}
.navbar {
    width: 100%; 
	height: 70px;
    z-index: 1000; 
	background-color: white;
}

}

  img {
	max-width: 100px;
  }
	
	.logo {
		text-decoration: none;
		color: black;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		font-size: 1rem;
	}



	@media (max-width: 500px) {
		.logo {
		text-decoration: none;
		color: black;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
		font-size: 2rem;
	}
		img{
			max-width: 3rem;
		}
	}
</style>
