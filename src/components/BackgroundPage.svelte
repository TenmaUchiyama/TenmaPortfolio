<script lang="ts">
	import BackmanHighIcon from '/portfolio-media/Imgs/BeckmanHigh_Icon.jpg';
	import ASBIcon from '/portfolio-media/Imgs/ASBIcon.jpg';
	import NCUK from '/portfolio-media/Imgs/NCUKIcon.jpg';
	import UOMIcon from '/portfolio-media/Imgs/UOMIcon.jpg';
	import KeioIcon from '/portfolio-media/Imgs/KeioIcon.jpg';
	import IHI from '/portfolio-media/Imgs/IHI_Icon.jpg';
	import Serio from '/portfolio-media/Imgs/serio.jpg';
	import Live2d from '/portfolio-media/Imgs/Live2d.jpg';

	import degree from '/portfolio-media/Icon/degree.jpg';
	import calendar from '/portfolio-media/Icon/calendar.jpg';
	import location from '/portfolio-media/Icon/location.jpg';
	import education from '/portfolio-media/Icon/education.jpg';
	import career from '/portfolio-media/Icon/career.jpg';
	import bag from '/portfolio-media/Icon/briefcase.jpg';
	import { displayLanguage, isDesktop } from '../store/store';

	interface IEducation {
		icon: string;
		title: string;
		degree: string;
		location: string;
		year: string;
	}

	interface ICareer {
		icon: string;
		title: string;
		position: string;
		location: string;
		year: string;
		contents: string[];
	}

	const educations: IEducation[] = [
		{
			icon: BackmanHighIcon,
			title: 'Arnold. O. Beckman High School',
			degree: 'High School',
			location: 'Irvine CA, USA',
			year: '2014-2016'
		},
		{
			icon: ASBIcon,
			title: 'The American School of Bangkok',
			degree: 'High School',
			location: 'Bangkok,Thailand',
			year: '2016-2018'
		},
		{
			icon: NCUK,
			title: 'NCUK Thailand',
			degree: 'Foundation year',
			location: 'Bangkok, Thailand',
			year: '2018-2019'
		},
		{
			icon: UOMIcon,
			title: 'The University of Manchester',
			degree: 'BEng in Electrical and Electronic Engineering',
			location: 'Mancheser, UK',
			year: '2019-2022'
		},

		{
			icon: KeioIcon,
			title: 'Keio University',
			degree: 'MSc in Computer Science',
			location: 'Kanagawa, Japan',
			year: '2023~'
		}
	];

	const careers: ICareer[] = [
		{
			icon: IHI,
			title: 'IHI Power System (Thailand) Co., Ltd.',
			position: 'Buisiness and Engineering Intern',
			location: 'Bangkok, Thailand',
			year: 'July 2021 - Sep 2021',
			contents: [
				'Create educational materials for new employees.',
				"Create a Python application aimed at optimizing my supervisor's weekly tasks, thereby achieving a twofold increase in efficiency.",
				"Acquire a comprehensive understanding of the LM6000 gas turbine's structure and the maintenance workflow in its operational context."
			]
		},
		{
			icon: Serio,
			title: 'Serio.Inc',
			position: 'Intern Teaching Assistant Part-Time',
			location: 'Okayama, Japan',
			year: 'June 2023 - Sep 2023',
			contents: [
				'Create educational materials for new employees.',
				"Create a Python application aimed at optimizing my supervisor's weekly tasks, thereby achieving a twofold increase in efficiency.",
				"Acquire a comprehensive understanding of the LM6000 gas turbine's structure and the maintenance workflow in its operational context."
			]
		},
		{
			icon: Live2d,
			title: 'Live2D Inc.',
			position: 'Development Part-Time',
			location: 'Tokyo, Japan',
			year: 'June 2023 ~ ',
			contents: [
				'Develop Web aplications for prototype',
				'evelopment of prototype applications for internal use'
			]
		}
	];



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


{#if $isDesktop}
<!-- style="font-size: 4rem; margin-bottom: 50px;"
style='max-width:5rem; margin-right: 10px' -->
<h1 class='category' > <img src={career} >{titles.career[$displayLanguage]}</h1>



{#each careers as career}
<div class="item career">
	<img src={career.icon} alt="">
	<div class="content">
		<h1 class='title'>{career.title}</h1>
		<p><img class='icon' src={bag} alt=""><b>{career.position}</b></p>
		<p><img class='icon' src={calendar} alt="">{career.year}</p>
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
<h1 class='category' > <img src={education} >{titles.education[$displayLanguage]}</h1>
{#each educations as education}
<div class="item education">
	<img src={education.icon} alt="">
	<div class="content">
		<h1 class='title'>{education.title}</h1>
		<p class='sub'><img class='icon' src={degree} alt=""><b>{education.degree}</b></p>
		<p class='sub'><img class='icon' src={calendar} alt="">{education.year}</p>
		<p class='sub'><img class='icon' src={location} alt="">{education.location}</p>
	</div>
	
</div>
{/each}

{:else}


<h1 class='category-vert' > <img src={career} >{titles.career[$displayLanguage]}</h1>
<div class="card-wrapper">
{#each careers as career}
<div class="card" >
	<img src={career.icon} class="card-img-top" alt="...">
	<div class="card-body">
	  <h5 class="card-title">{career.title}</h5>
	</div>
	<ul class="list-group list-group-flush">
	  <li class="list-group-item"><img class='card-icon' src={bag} alt=""><b>{career.position}</b></li>
	  <li class="list-group-item"><img class='card-icon' src={calendar} alt="">{career.year}</li>
	 
	</ul>
	
  </div>
{/each}
</div>

<br>
<br>
<br>
<h1 class='category-vert' > <img src={education} >{titles.education[$displayLanguage]}</h1>
<div class="card-wrapper">
{#each educations as education}

	<div class="card" >
		<img src={education.icon} class="card-img-top" alt="...">
		<div class="card-body">
		  <h5 class="card-title">{education.title}</h5>
		</div>
		<ul class="list-group list-group-flush">
		  <li class="list-group-item"><img class='card-icon' src={degree} alt=""><b>{education.degree}</b></li>
		  <li class="list-group-item"><img class='card-icon' src={calendar} alt="">{education.year}</li>
		  <li class="list-group-item"><img class='card-icon' src={location} alt="">{education.location}</li>
		 
		</ul>
		
	  </div>


{/each}

</div>
{/if}

<style>

.category img{
	max-width: 5vw;
}
.category {
	font-size: 3vw;
	display: flex;
	align-items: center;

}
/* ループ内の各教育項目のスタイル */
.item {
	height: 25vh;
    border-radius: 5px;
    border-style: solid;
	border-width: 1px;
    box-shadow: 14px 14px 30px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	margin-top: 9vh;
	gap: 10%;
	padding: 9%;
}

.card {
	box-shadow: 14px 14px 30px rgba(0, 0, 0, 0.1);
}

.item img {
  max-width: 20%;

}



.title {
  font-size: 200%;
  font-weight: bold;
}

.icon {
  width: 5%;
  vertical-align: middle;
  margin-right: 5px;
}
.card-icon {
  width: 8%;
  vertical-align: middle;
  margin-right: 5px;
}


.category-vert{
	font-size: 2rem;
	display: flex;
	align-items: center;
	gap: 5%;
}
.category-vert img{
	max-width: 10%;
}


.card {
	width: 30vw;
	margin: 10px;
}

.card-wrapper
{
		display: flex;
		flex-wrap: wrap;

}

.card-img-top 
{
	padding : 5%;
}

@media (max-width: 700px) {
	.card {
		width: 100%;
	}

}


</style>


