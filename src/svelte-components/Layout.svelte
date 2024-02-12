<script>
	import logo from '/logo.svg';
	import { displayLanguage } from '@/store/store';

</script>

<nav class="navbar ">
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
	
  </nav>


<slot />

<style>
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
		font-size: 2rem;
	}

</style>
