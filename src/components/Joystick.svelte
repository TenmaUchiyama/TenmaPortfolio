<script lang="ts">
	import { joystickInitData, type IJoystickData } from "../types/IJoystickData";
	import { EventKey, emitter } from "../event/PhaserEvent";
  	import { isMonitorOpen, isOnLoading } from "../store/store";



	const btnRadius = window.innerWidth *0.14
	const baseRadius =  window.innerWidth * 0.2 

	const thumbRadius = baseRadius / 3;
	const maxRadius = baseRadius - thumbRadius;




	function joysctickComponent(node: SVGSVGElement, param?: any) {
		const base: SVGSVGElement = document.querySelector('#base') as SVGSVGElement;
		const thumb: SVGSVGElement = document.querySelector('#thumb') as SVGSVGElement;

		let centerX = node.width.baseVal.value / 2  ;
		let centerY = node.height.baseVal.value / 2 ;

		base.setAttribute('cx', String(centerX));
		base.setAttribute('cy', String(centerY));
		thumb.setAttribute('cx', String(centerX));
		thumb.setAttribute('cy', String(centerY));

		let isDragging: boolean = false;
		
	

		const getDirectionFromAngle = (angle : number) => {

let joystickData : IJoystickData = {
	up : false, 
	down : false, 
	right: false, 
	left : false
}

const range = 0.261799
if (angle >= -Math.PI / 4 - range && angle < Math.PI / 4 + range) {
	joystickData.down = true
}

if (angle >= (3 * Math.PI) / 4 - range || angle < (-3 * Math.PI) / 4 + range) {
	joystickData.up = true
}

if (angle >= (-3 * Math.PI) / 4 - range && angle < -Math.PI / 4 +range) {
	joystickData.left = true
}

if (angle >= Math.PI / 4 - range && angle < (3 * Math.PI) / 4 + range) {
	joystickData.right = true
}


emitter.emit(EventKey.JOYSTICK, joystickData)

	}
		node.ontouchstart = (event: TouchEvent) => {
			isDragging = true;
		};

		node.ontouchmove = (event: TouchEvent) => {

			const touch = event.touches[0]
			if (isDragging) {
				const touchOffsetX = touch.clientX - node.getBoundingClientRect().left;
				const touchOffsetY = touch.clientY - node.getBoundingClientRect().top;

				const dX = touchOffsetX - centerX 
				const dY = touchOffsetY - centerY;
				const distance = Math.sqrt(dX ** 2 + dY ** 2);
				const angle = Math.atan2(dX, dY);

				if (distance >= maxRadius) {
					const thumbX = centerX + maxRadius * Math.sin(angle);
					const thumbY = centerY + maxRadius * Math.cos(angle);
					thumb.setAttribute('cx', String(thumbX));
					thumb.setAttribute('cy', String(thumbY));
				} else {
					// ThumbがBase内にある場合、通常の位置更新
					thumb.setAttribute('cx', String(touchOffsetX));
					thumb.setAttribute('cy', String(touchOffsetY));
				}
				getDirectionFromAngle(angle)
			}

			node.ontouchend = (event: TouchEvent) => {
				isDragging = false;
				thumb.setAttribute('cx', String(centerX));
				thumb.setAttribute('cy', String(centerY));
				emitter.emit(EventKey.JOYSTICK, joystickInitData)
			};

			node.ontouchend = (event: TouchEvent) => {
				isDragging = false;
				// マウスが領域を離れたときに円の位置をリセット
				thumb.setAttribute('cx', String(centerX));
				thumb.setAttribute('cy', String(centerY));
				emitter.emit(EventKey.JOYSTICK, joystickInitData)
			};


			return {
				destroy() {}
			};
		};
	}


	function buttonComponent(node:SVGSVGElement) {
		const button : SVGSVGElement = document.querySelector('#btn') as SVGSVGElement;
		let isBtnPressedOnce : boolean = false;

		let centerX = node.width.baseVal.value / 2  ;
		let centerY = node.height.baseVal.value / 2  ;

	
		button.setAttribute('cx', String(centerX));
		button.setAttribute('cy', String(centerY));

		button.ontouchstart = (event : TouchEvent) => {
		
			if(isBtnPressedOnce) return
			isBtnPressedOnce = true
			
			emitter.emit(EventKey.SELECT_BTN, true)
			button.style.fill = "rgba(140,140,140,0.8)";
			

		}

		button.ontouchend = (event:TouchEvent) => {
			if(!isBtnPressedOnce) return
			isBtnPressedOnce = false
			button.style.fill = "rgba(100,100,100,0.6)";
		

		}

	}

</script>


{#if $isMonitorOpen === false && $isOnLoading === false}
<svg
	id="joystick"
	use:joysctickComponent
	width={baseRadius * 3}
	height={baseRadius * 3}
	style = "
	position : fixed; 
	bottom: 0; 
	left : 0;
	"
>
	<circle id="base" r={baseRadius}  />
	<circle id="thumb" r={thumbRadius}  />
</svg>


<svg id='btn-svg' use:buttonComponent
width={baseRadius * 3}
height={baseRadius * 3}
>
	<circle id="btn" r={btnRadius} />
</svg>


{/if}

<style>

	


	

#base
{
	stroke-width: 5px; 
	fill:rgba(255,255,255,0.65); 
	stroke: gray;
}

#thumb {
	stroke-width: 1px; 
	stroke: gray;
	fill: rgba(100,100,100,0.8) ;
}



#btn-svg
{
	position: fixed;
	bottom: 0; 
	right: 0;
}

#btn
{
	border-style: solid;
	stroke-width: 2px; 
	stroke: rgba(70,70,70,0.6) ;
	fill: rgba(100,100,100,0.6) ;
	
}


</style>