<script lang="ts">
	import projectData from "@page-contents/contents/projectContents.json"
	import { displayLanguage } from '@/store/store';

	
	interface IProject {
		videoContain: string, 
		imgPath: string;
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

	const projects: IProject[] = projectData
</script>

<main class='main'>
	{#each projects as prj}
	<div class="card" style="width: 16rem; margin:20px;" >
		<!-- svelte-ignore a11y-missing-attribute -->
		{#if prj.videoContain === ""}
			<img src={prj.imgPath} class="card-img-top img-fluid" style="height: 25%;">
		{:else}
		<iframe height="25%" src={prj.videoContain} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		{/if}
		
		
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
	.main{
		display: flex;
		flex-wrap: wrap;
		padding : 10px;
		height: 100%;
		overflow-y: auto;
		
	}


	@media(max-width: 500px)
	{
		.main{
			padding-bottom: 40%;
		}
	}



	
	
</style>
