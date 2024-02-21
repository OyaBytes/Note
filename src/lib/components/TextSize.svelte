<script>
	// v1.2 - added keyboard nav for colors
	// @todo still a bug when the dropdown opens, we should focus on the already selected color, this only works when you click it open, close it and open again

	import { v4 as uuid } from '@lukeed/uuid';
	import { clickOutside } from '../utils/clickOutside';
	import { tick } from 'svelte';
	import { slide } from 'svelte/transition';
	
	// Initial value
	export let id = uuid();
	export let value = '#5E7ABC';

	// Our color set
	let values = [
		11, 12, 13,14,15,16,17,18,20,22,24,28,32,36,40
  ]

	 // Keyboard shortcut
  let trigger = 'Escape';
  function handleKeydown(e) {
    if (e.key == trigger) {
      ddActive = false;
    }
  }

	let windowHeight;
	let top;

	let ddActive = false;
	
	let ddHeight = 158;
	// ddHeight is initially undefined so we can't get the correct values from binding; that's why we have a default
	// todo render offscreen for .1sec to get the height automatically?
	
	let inputHeight;

	async function toggleDropdown(e) {
		if (
			(e.clientY + inputHeight) < ddHeight
			||
			(windowHeight - ddHeight - inputHeight - e.clientY) > 0
		) {
			top = false;
		} else {
			top = true;
		}
		
		ddActive = !ddActive

		await tick();
		if (ddActive) {
			//document.querySelector('.color-block.active').focus();
		}
	}
	

	function clickOutsideDropdown() {
		ddActive = false;
	}

	function changeValue(innerValue) {
		value = innerValue;
		ddActive = false;
	}
	
	function keyboardGridNav(e, index) {
	
	 
	 const focussedElement = document.activeElement.id;
	 
	 let myRow = parseInt(focussedElement.charAt(focussedElement.length-3));
	 let myIndex = parseInt(focussedElement.charAt(focussedElement.length-1));
	 let nextRow;
	 let prevRow;
	 let nextIndex;
	 let prevIndex;

	 switch(e.keyCode) {
		// top arrow
		case 38: 
				prevRow = myRow-1;
				if (prevRow > -1) {
					document.getElementById(id+'-'+prevRow+'-'+myIndex).focus();
				}
				break;

		// down arrow
        case 40: 
            nextRow = myRow+1;
            if (nextRow < values.length) {
                document.getElementById(id+'-'+nextRow+'-'+myIndex).focus();
            }
            break;          
        }

	}

</script>

<svelte:window bind:innerHeight={windowHeight} on:keydown={handleKeydown} />

<div class="color-picker-holder max-w-min inline-block m-auto">
<div class="color-picker-inner">
	<button bind:clientHeight={inputHeight} class="select-color" on:click={(e) => toggleDropdown(e)} class:fake-focus={ddActive}>
		<div style="display: flex;">
			<div class="p-1 text-gray-600 relative">11</div>
			<div class="caret" class:top={top} style="margin-right: .2rem;"></div>
		</div>
	</button>
</div>

{#if ddActive}
<div class:top={top} bind:clientHeight={ddHeight} transition:slide class="values-dropdown mt-2 p-1 bg-white text-gray-700" use:clickOutside on:click_outside={clickOutsideDropdown}>
	<div class="text-gray-700">
	{#each values as val, index}
        <button
                id="{id}-{index}"
                class:active={11 == val}
                on:keydown={(e) => keyboardGridNav(e,  index)}
                on:click={() => { changeValue(val) }}
                class="text-gray-700 p-2 text-sm w-full hover:bg-gray-100 rounded">
            {val}
        </button>
	{/each}
			</div>
	</div>
	{/if}
</div>


<style>
	
	.color-picker-holder {
		position: relative;
	}
	
	.color-picker-inner {
		display: flex;
		height: 35px;
	}
	
	.select-color {
		padding: 2px;
		border-radius: .2rem;
		margin-right: .4rem;
		height: 40px;
	}
	
	.caret {
	  width: 0; 
	  height: 0; 
	  border-left: 4px solid transparent;
	  border-right: 4px solid transparent;
	  border-top: 4px solid #555;
		position: relative;
		top: 10px;
		margin-left: 4px;
	}	

	.caret.top {
	  border-left: 4px solid transparent;
	  border-right: 4px solid transparent;
	  border-bottom: 4px solid #555;
		border-top: none;
	}
	
	.active {
		box-shadow: inset 0 0 0 1px #FFF, 0 0 3px 1px rgba(0,0,0,0.25); border-radius: 12px;
	}
	
	.fake-focus, button:focus  {
		outline: 0;
		box-shadow: 0 0 0 2px #18A0FB;
		border-color: #18A0FB;
	}
	
	.values-dropdown {
		position: absolute;
		z-index: 44;
		top: 40px;
		border: 1px solid #CCC;
		border-radius: .3rem;
	}
	
	
	.values-dropdown.top {
		top: auto;
		bottom: 40px;
	}
	
	.values-dropdown button {
		border: none;
	}
	
</style>
