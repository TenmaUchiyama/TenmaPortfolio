<script lang="ts">
	import BackmanHighIcon from '/portfolio-media/Imgs/BeckmanHigh_Icon.jpg';
	import ASBIcon from '/portfolio-media/Imgs/ASBIcon.jpg';
	import NCUK from '/portfolio-media/Imgs/NCUKIcon.png';
	import UOMIcon from '/portfolio-media/Imgs/UOMIcon.jpg';
	import KeioIcon from '/portfolio-media/Imgs/KeioIcon.png';
	import IHI from '/portfolio-media/Imgs/IHI_Icon.png';
	import Serio from '/portfolio-media/Imgs/serio.jpg';
	import Live2d from '/portfolio-media/Imgs/Live2d.png';

	import degree from '/portfolio-media/Icon/degree.png';
	import calendar from '/portfolio-media/Icon/calendar.png';
	import location from '/portfolio-media/Icon/location.png';
	import education from '/portfolio-media/Icon/education.png';
	import career from '/portfolio-media/Icon/career.png';
	import bag from '/portfolio-media/Icon/briefcase.png';
	import { displayLanguage } from '../store/store';

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

<h1 style="font-size: 4rem; margin-bottom: 50px;"> <img src={career} style='max-width:5rem; margin-right: 10px'>{titles.career[$displayLanguage]}</h1>
{#each careers as career}
<div class="educationItem">
	<img src={career.icon} alt="">
	<div class="content">
		<h1>{career.title}</h1>
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
<h1 style="font-size: 4rem; margin-bottom: 50px;"> <img src={education} style='max-width:5rem; margin-right: 10px'>{titles.education[$displayLanguage]}</h1>
{#each educations as education}
<div class="educationItem">
	<img src={education.icon} alt="">
	<div class="content">
		<h1>{education.title}</h1>
		<p><img class='icon' src={degree} alt=""><b>{education.degree}</b></p>
		<p><img class='icon' src={calendar} alt="">{education.year}</p>
		<p><img class='icon' src={location} alt="">{education.location}</p>
	</div>
	
</div>
{/each}


<style>
.educationItem {
    width: 100%;
	height: 40%;
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
	gap: 10px;
}
.educationItem img {
	width: 200px;
	margin-left: 10%;
}

.icon{
	max-width: 2rem;
	margin-right: 10px;
}


</style>


