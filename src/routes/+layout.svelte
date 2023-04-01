<script>
    import { SvelteToast } from '@zerodevx/svelte-toast'
    import './../app.css';
</script>
<nav>
    <a href="/">Home</a>
    <a href="/lista">Pessoas</a>
    <a href="/inserir">Nova</a>
    <a href="/sobre">Sobre</a>
</nav>
<SvelteToast />
<slot></slot>