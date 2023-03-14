<script>
    import { onMount } from 'svelte';
  
    let visible = false;
  
    onMount(() => {
      // set the visible flag to true after a brief delay to allow time for the component to render
      setTimeout(() => {
        visible = true;
      }, 100);
    });
  </script>
  
  <style>
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background-color: #333;
      color: #fff;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
  
    .visible {
      opacity: 1;
    }
  </style>
  
  <div class={`nav ${visible ? 'visible' : ''}`}>
    <!-- your navigation links here -->
    <p>sdsdsddsa</p>
  </div>
  