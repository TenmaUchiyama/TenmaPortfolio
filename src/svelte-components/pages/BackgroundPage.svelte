<script lang="ts">



	import { displayLanguage } from '@/store/store';

	import backgroundContents from '@page-contents/contents/backgroundContents.json'
	import medias from "@page-contents/media-path/backgroundMediaPath.json"


	interface IEducation {
		iconPath: string;
		title: string;
		degree: string;
		location: string;
		year: string;
	}

	interface ICareer {
		iconPath: string;
		title: string;
		position: string;
		location: string;
		year: string;
		contents: string[];
	}


	let careers : ICareer[] = backgroundContents['careers']
	let educations : IEducation[] = backgroundContents["educations"]




	const titles = {
		education : {
			ja : "学歴",
			en : "Education",
			th: "การศึกษา"
		},
		career : {
			ja : "職歴",
			en : "Career",
			th: "อาชีพ"
		},
	} 
</script>

<main class="main">
	
<h1 style="font-size: 4rem; margin-bottom: 50px;"> <img src={medias.icon.career} style='max-width:5rem; margin-right: 10px'>{titles.career[$displayLanguage]}</h1>
{#each careers as career}
<div class="educationItem">
	<img src={career.iconPath} alt="">
	<div class="car-content content">
		<h1>{career.title}</h1>
		<p><img class='icon' src={medias.icon.bag} alt=""><b>{career.position}</b></p>
		<p><img class='icon' src={medias.icon.calendar} alt="">{career.year}</p>
		<!-- <ul class="list-group">
			{#each career.contents as content}
				<li class='list-group-item'> </li>
			{/each}
		</ul> -->
	</div>
	
</div>
{/each}
<br>
<br>
<br>
<h1 style="font-size: 4rem; margin-bottom: 50px;"> <img src={medias.icon.education} style='max-width:5rem; margin-right: 10px'>{titles.education[$displayLanguage]}</h1>
{#each educations as education}
<div class="educationItem">
	<img src={education.iconPath} alt="">
	<div class="edu-content content">
		<h1>{education.title}</h1>
		<p><img class='icon' src={medias.icon.degree} alt=""><b>{education.degree}</b></p>
		<p><img class='icon' src={medias.icon.calendar} alt="">{education.year}</p>
		<p><img class='icon' src={medias.icon.location} alt="">{education.location}</p>
	</div>
	
</div>
{/each}


</main>
<style>


.main
{
	width:100%;
	height: 100%; 
	padding: 20px;
	overflow-y: auto;
}


.educationItem {
    width: 100%;
	height: auto;
    border-radius: 5px;
    border-style: solid;
	border-width: 1px;
    box-shadow: 14px 14px 30px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	/* justify-content: space-evenly; */
	margin-bottom: 60px ;
	gap: 10%;
}


.content{
	width: 100% ;
}



.content p 
{
	font-size: 2rem;
	gap: 5px;
}
.educationItem img {
	width: 15%;
	margin-left: 10%;
}

.icon{
	max-width: 4%;
	margin-right: 10px;
}



@media (max-width: 500px) {
	.main{
		padding-bottom: 20%;
	}
	.icon{
	max-width: 10%;
	margin-right: 10px;
		}

.educationItem {
    width: 100%;
	height: 30%;
    border-radius: 5px;
    border-style: solid;
	border-width: 1px;
    box-shadow: 14px 14px 30px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	/* justify-content: space-evenly; */
	margin-bottom: 20px ;
	gap: 5%;
}


.content{
	width: 100% ;
}

.content h1{
	font-size: 1.2rem;
}


.car-content p 
{
	font-size: 0.7rem;
	margin: 3;
}

.edu-content p 
{
	font-size: 0.5rem;
	margin: 0;
}

.educationItem img {
	width: 35%;
	margin-left: 10%;
}

.icon{
	width: 5px;
	margin: 2px;
	padding:0;
}
}

</style>


