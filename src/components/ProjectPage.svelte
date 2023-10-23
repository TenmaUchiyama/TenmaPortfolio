<script lang="ts">
	import PuzzleBot from '/portfolio-media/ProjectImg/Puzzlebot.jpg';
	import MusicPlayer from '/portfolio-media/ProjectImg/GestureMusicPlayer.jpg';
	import SoftDrink from '/portfolio-media/ProjectImg/SoftDrinkServer.jpg';
	import MRProject from '/portfolio-media/ProjectImg/MRProject.jpg';
	import { displayLanguage } from '../store/store';

	
	interface IProject {
		img: string;
		title: {
			[lang:string ]:string
		},
		description: {
			[lang:string] : string
		}
		skill: {
			lang: string, 
			level:string,
			color:string
		}[];
	}

	const projects: IProject[] = [
		{
			img: PuzzleBot,
			title:{
				en : 'Line-Following Buggy',
				ja : "ラインフォローイング・バギー",
				th : "รถบักกี้ที่ตามเส้นทาง"
			},
			description:{
				ja : "白線を検出し、その上を走行するバギーを開発しました。このプロジェクトでは、ArduinoとC++を使用した基本的なファームウェアの開発に加えて、車両とPCB基板の設計など、幅広い開発作業を経験しました。",
				en:"I developed a buggy that detects white lines and runs along them. This project involved a wide range of development tasks, including basic firmware development using Arduino and C++, as well as designing the vehicle and PCB board from scratch.",
				th:"ฉันได้พัฒนาบักกี้ที่สามารถตรวจจับเส้นขาวและขับขี่ตามเส้นนั้นได้ โครงการนี้เกี่ยวข้องกับงานพัฒนาที่หลากหลายมาก รวมถึงการพัฒนาฟิวแวร์พื้นฐานโดยใช้ Arduino และ C++ และการออกแบบรถและบอร์ด PCB ตั้งแต่ต้นสร้างขึ้น"
			},
			skill: [{
				lang: "C++",
				level: "70",
				color: "bg-warning"
			}, {
				lang: "Arduino", 
				level: "90", 
				color: "bg-success"
			}, {
				lang: "CAD",
				level: "10", 
				color: "bg-danger"
			}, {
				lang: "Altium Editor",
				level: "10", 
				color: "bg-info"
			},]
		},
		{
			img: MusicPlayer,
			title: {
				en : 'Gesture Music Player',
				ja : "ジェスチャー音楽プレーヤー",
				th : "เครื่องเล่นเพลงที่ใช้ท่าทาง"
			},
			description:{
				ja : "Python言語とMediaPipe、OpenCVを活用して、カメラから取得したデータを使用して人間の動作を分析し、人間のジェスチャーによって再生、停止、曲の選択などのMP3プレイヤーの機能を操作できるおもちゃを作成しました。																						",
				en:"I created a toy that analyzes human movements using data acquired from a camera, based on the Python language with MediaPipe and OpenCV. The toy allows control of MP3 player functions such as play, stop, and song selection through human gestures.",
				th:"ฉันได้สร้างของเล่นที่วิเคราะห์การเคลื่อนไหวของมนุษย์โดยใช้ข้อมูลที่ได้รับจากกล้อง โดยใช้ภาษา Python ร่วมกับ MediaPipe และ OpenCV ของ MP3 player โดยใช้ท่าทางของมนุษย์ควบคุมฟังก์ชันเช่นเล่น เพลงหยุด และเลือกเพลง"
			},
			skill: [{
				lang: "Python",
				level: "80",
				color: ""
			}, {
				lang: "MediaPipe",
				level: "70",
				color: "bg-info"
			}, {
				lang: "Computer Vision",
				level: "60",
				color: "bg-danger"
			}, {
				lang: "OpenCV",
				level: "70",
				color: "bg-warning"
			}]
		},
		{
			img: SoftDrink,
			title: {
				en : 'Voice-Controlled Soft Drink Server',
				ja : "音声制御ソフトドリンクサーバー",
				th : "เครื่องเติมน้ำอัดร้อยที่ควบคุมด้วยเสียง"
			},
			description:{
				ja : "Raspberry Piを使用して、Python言語で音声で操作するソフトドリンクサーバーを作成しました。このサーバーは、人間の声から水、コーラ、お茶などの指示を認識し、対応する飲み物を提供します。飲み物を提供するだけでなく、Wolfram Alphaを使用した高度な計算質問に答えたり、Wikipediaを検索して幅広い知識を提供する機能も備えています。",
				en:"I created a voice-operated soft drink server using the Python language on Raspberry Pi. It recognizes human voice commands for water, cola, or tea, dispensing the appropriate beverage accordingly. In addition to serving drinks, it has the capability to provide answers to advanced calculation questions using Wolfram Alpha and retrieve extensive knowledge through Wikipedia-based searches.",
				th:"ฉันได้สร้างเซิร์ฟเวอร์เครื่องดื่มที่ใช้เสียงเสมือนคนดำเนินการด้วยภาษา Python บน Raspberry Pi โดยระบบนี้สามารถรู้จักคำสั่งด้วยเสียงของมนุษย์เพื่อเติมน้ำ, โค้ก, หรือชา และจะให้น้ำดื่มที่ถูกต้องตามคำสั่ง นอกจากการเติมเครื่องดื่มแล้ว ระบบยังสามารถให้คำตอบในการคำนวณขั้นสูงโดยใช้ Wolfram Alpha และดึงความรู้จากการค้นหาบน Wikipedia ได้ด้วย"
			},
			skill: [{
				lang: "RaspberryPi",
				level: "73",
				color: "bg-danger"
			}, {
				lang: "Python",
				level: "84",
				color: ""
			}, {
				lang: "Voice Recognition",
				level: "22",
				color: "bg-success"
			}, {
				lang: "Speech Synthesize",
				level: "22",
				color: "bg-info"
			}]
		},
		{
			img: MRProject,
			title: {
				en : 'MR Based E-bike Diagnosis Application',
				ja : "MRベースの電動自転車診断アプリケーション",
				th : "แอปพลิเคชันการวินิจฉัยรถจักรยานไฟฟ้าที่ใช้เทคโนโลยี MR"
			},
			description:{
				ja : "MR（Mixed Reality）技術を使用して、Ebikeのパーツのメンテナンスを行うアプリを開発しました。このアプリは、Arduinoを使用して各Ebikeパーツからデータを収集し、そのデータをMQTTプロトコルを介してOculus Questに送信します。そのデータは空間上のユーザーインターフェースに表示されます。さらに、MRアプリはMR環境内からEbikeを無線で操作できるようにします。このプロジェクトにより、UnityとC#を使用したMRアプリの開発、無線通信プロトコル、Ebikeのハードウェアに関する知識、効率的なデータ抽出のためのファームウェア開発などの知識を得ました。",
				en:"I developed an app using Mixed Reality (MR) technology to perform maintenance on Ebike components. The app collects data from each Ebike part using Arduino, and transmits this data to an Oculus Quest via the MQTT protocol. The data is then displayed in a spatial user interface. Moreover, the MR app allows wireless control of the Ebike from within the MR environment. This project enabled me to gain knowledge in developing MR apps using Unity and C#, wireless communication protocols, hardware aspects of Ebikes, and firmware development for efficient data extraction.",
				th:"ผมได้พัฒนาแอปพลิเคชันโดยใช้เทคโนโลยี Mixed Reality (MR) เพื่อดำเนินการบำรุงรักษาชิ้นส่วนของ Ebike แอปนี้รวบรวมข้อมูลจากแต่ละชิ้นส่วนของ Ebike โดยใช้ Arduino และส่งข้อมูลเหล่านี้ไปยัง Oculus Quest ผ่านโปรโตคอล MQTT ข้อมูลนี้จากนั้นถูกแสดงในอินเตอร์เฟซผู้ใช้ที่อยู่ในพื้นที่และยังอนุญาตให้ควบคุม Ebike ไร้สายจากภายในสภาพแวดล้อม MR โครงการนี้ช่วยให้ฉันได้รับความรู้ในการพัฒนาแอป MR โดยใช้ Unity และ C# โปรโตคอลการสื่อสารไร้สาย ด้านฮาร์ดแวร์ของ Ebike และการพัฒนาเฟิร์มแวร์สำหรับการสกัดข้อมูลอย่างมีประสิทธิภาพ"
			},
			skill: [{
				lang: "Unity",
				level: "86",
				color: "bg-info"
			}, {
				lang: "C#",
				level: "76",
				color: ""
			},{
				lang: "Arduino", 
				level: "96", 
				color: "bg-success"
			}, {
				lang: "C++",
				level: "40",
				color: "bg-warning"
			},{
				lang: "Mixed Reality",
				level: "70",
				color: "bg-danger"
			}]
		}
	];
</script>

<main>
	{#each projects as prj}
	<div class="card" style="width: 16rem; margin:20px;" >
		<!-- svelte-ignore a11y-missing-attribute -->
			<img src={prj.img} class="card-img-top img-fluid" style="height: 25%;">

		
		<div class="card-body" style="height:auto;">
		  <h5 class="card-title">{prj.title[$displayLanguage]}</h5>
		  <p class="card-text">{prj.description[$displayLanguage]}</p>
		</div>
		<ul class="list-group list-group-flush">

			{#each prj.skill as skill }
				<li class="list-group-item">
					<p>{skill.lang}</p>
					<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
						<div class="progress-bar {skill.color} progress-bar-striped progress-bar-animated" style="width: {skill.level}%"></div>
					</div>
		
				</li>
			{/each} 
	
		</ul>
		
	  </div>
	{/each}
	
</main>



<style>
	main{
		display: flex;
		flex-wrap: wrap;
	}
</style>
