<script lang="ts">
	import { joystickInitData, type IJoystickData } from "../types/IJoystickData";
	import { EventKey, emitter } from "../event/PhaserEvent";
  	import { isMonitorOpen } from "../store/store";

	const btnRadius = window.innerWidth *0.07
	const baseRadius = window.innerWidth * 0.09;
	const thumbRadius = baseRadius / 3;
	const maxRadius = baseRadius - thumbRadius;

	let centerX : number;
	let centerY : number;

	let isDragging = false;

	let base: SVGSVGElement;
	let thumb: SVGSVGElement;





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
			
			console.log("押された")
		}

		button.ontouchend = (event:TouchEvent) => {
			if(!isBtnPressedOnce) return
			isBtnPressedOnce = false
			emitter.emit(EventKey.SELECT_BTN, false)
			button.style.fill = "rgba(100,100,100,0.6)";
			console.log("押されなかった")

		}

	}

</script>


{#if $isMonitorOpen === false}
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

{:else}
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
	<path d="M 17.84375 11.201172 A 1.0001 1.0001 0 0 0 17.150391 11.494141 L 11.494141 17.150391 A 1.0001 1.0001 0 0 0 11.494141 18.564453 L 24.929688 32 L 11.494141 45.435547 A 1.0001 1.0001 0 0 0 11.494141 46.849609 L 17.150391 52.505859 A 1.0001 1.0001 0 0 0 18.564453 52.505859 L 32 39.070312 L 45.435547 52.505859 A 1.0001 1.0001 0 0 0 46.849609 52.505859 L 52.505859 46.849609 A 1.0001 1.0001 0 0 0 52.505859 45.435547 L 39.070312 32 L 52.505859 18.564453 A 1.0001 1.0001 0 0 0 52.505859 17.150391 L 46.849609 11.494141 A 1.0001 1.0001 0 0 0 45.435547 11.494141 L 32 24.929688 L 23.832031 16.761719 A 1.0001 1.0001 0 1 0 22.417969 18.175781 L 31.292969 27.050781 A 1.0001 1.0001 0 0 0 32.707031 27.050781 L 46.142578 13.615234 L 50.384766 17.857422 L 36.949219 31.292969 A 1.0001 1.0001 0 0 0 36.949219 32.707031 L 50.384766 46.142578 L 46.142578 50.384766 L 32.707031 36.949219 A 1.0001 1.0001 0 0 0 31.292969 36.949219 L 17.857422 50.384766 L 13.615234 46.142578 L 27.050781 32.707031 A 1.0001 1.0001 0 0 0 27.050781 31.292969 L 13.615234 17.857422 L 17.857422 13.615234 L 19.042969 14.800781 A 1.0001 1.0001 0 1 0 20.457031 13.386719 L 18.564453 11.494141 A 1.0001 1.0001 0 0 0 17.84375 11.201172 z"></path>
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