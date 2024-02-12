<script>
	// @ts-nocheck

	import face from '/portfolio-media/profile-pic.jpg';
	import { displayLanguage } from '@/store/store';
	import { content } from '@/utils/ContentData';

</script>

<main class="container profile">
	<div class="row align-items-center" >
		<div class="col-md-6">
			<img src={face} alt="Your Face" class="img-thumbnail"  style="max-width: 80%;"/>
		</div>
		<div class="col-md-6">
			<div class="content">
				<p id="name" class="name">{content['home-content-name'][$displayLanguage]}</p>
				<p id="birthday">{content['home-content-birthdate'][$displayLanguage]}</p>
				<p id="position">{content['home-content-job'][$displayLanguage]}</p>
				<p id="school">{content['home-content-school'][$displayLanguage]}</p>
				<p id="ambition">{content['home-content-ambition'][$displayLanguage]}</p>
			</div>
		</div>
	</div>
</main>

<style>

	
	.profile {
		display: flex;
		flex-direction: row;
		align-content: center;
		justify-content: center;	
		gap: 50px;
		height: 80%;
	
	}

	#name {
		font-weight: bold;
		font-size: 3rem;
	}

	.profile .content {
		max-width: 100%;
		border-style: solid;
		border-width: 2px;
		border-radius: 20px;
		background-color: #ededed;
		padding: 5%;
	}
</style>
