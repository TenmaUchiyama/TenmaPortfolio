
<script lang='ts'>
import Lang from '/portfolio-media/Icon/language.png'
import Prog from '/portfolio-media/Icon/programming.png'
import Ja from '/portfolio-media/Icon/japan.png'
import En from '/portfolio-media/Icon/english.png'
import { displayLanguage } from '../store/store';


    const skills =[ 
    {
        name: "Typescript", 
        proficiency : 78,
        color: ""
    },
    {
        name: "Python", 
        proficiency : 72,
        color: "bg-info"
    },
    {
        name: "C#", 
        proficiency : 68,
        color: "bg-success"
    },
    {
        name: "C++", 
        proficiency : 48,
        color: "bg-warning"
    },
    {
        name: "Svelte", 
        proficiency : 70,
        color: "bg-danger"
    },
    {
        name: "Unity", 
        proficiency : 64,
        color: "bg-secondary"
    },
    {
        name: "Phaser", 
        proficiency : 54,
        color: ""
    },
    
    ]





    const content = {
        'title-language' : {
        ja : "言語",
        en : "Language",
        th : "ภาษา"
        },
        'title-programming' : {
        ja : "プログラミング言語＆フレームワーク",
        en : "Programming Language & Framework",
        th : "ภาษาโปรแกรมมิ่งและเฟรมเวิร์ก"
        },
        "language-ja": {
        ja : "日本語",
        en : "Japanese",
        th : "ภาษาญี่ปุ่น"
        },
        "language-en":
        {
        ja : "英語",
        en : "English",
        th : "ภาษาอังกฤษ"
        }
    }
</script>


<main class="container mt-5">

    <section id="skills" class="mt-5">
        <ul class="list-unstyled">
            <li class="mb-3">
                <h2><img src={Lang} alt="" style="margin-right: 1%">{content["title-language"][$displayLanguage]}</h2>
                <div class="list-unstyled" >
                    <div class="d-flex flex-row align-items-center">
                        <img src={Ja} alt="" style="width: 4rem; margin: 1%">
                         <h3>{content["language-ja"][$displayLanguage]}</h3>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <img src={En} alt="" style="width: 4rem; margin: 1%">
                        <h3>{content["language-en"][$displayLanguage]}</h3>
                    </div>
                    
                </div>
            </li>
            <br><br><br> 
            <li class="mb-3">
                <h2><img src={Prog} alt="" style="margin-right: 1%">{content["title-programming"][$displayLanguage]}</h2>
                <ul class="list-unstyled">
                   {#each skills as skill}
                    <li class='list-unstyled skill-list' >
                        <label for='skill-level'><b>{skill.name}:</b></label>
                        <div class="progress" id ='skill-level'>
                            <div class="progress-bar progress-bar-striped progress-bar-animated {skill.color}" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: {skill.proficiency}%"></div>
                        </div>
                    </li>
                   {/each}
                </ul>
            </li>
        </ul>

    </section>

</main>


<style>
.skill-list{
    margin-top: 1%;
}
</style>