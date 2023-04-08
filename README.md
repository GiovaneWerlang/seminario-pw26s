# Svelte

## Licença

```bash
MIT
```

## Responsáveis pelo desenvolvimento

```bash
Criador: Rich Harris
Comunidade
```

## Vantagens e Desvantagens
```bash
Menos código boilerplate.
Compilado.
Variáveis reativas usando $.
Sem virtual DOM.
Estilização por componente.
Tem a própria solução para gerenciamento de estado.
Framework não está incluso no bundle gerado.
```
```bash
Comunidade menor que outros frameworks.
Kit lançado em dezembro 2022.
Pouco suporte em IDE.
Poucas bibliotecas e recursos.
```

## Necessário ter

```bash
Node
IDE
```

## Criando um projeto

```bash
# criando um projeto na pasta atual
npm create svelte@latest

# criando um projeto em seminario
npm create svelte@latest seminario
```
## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview
```bash
npm run preview
```

## Arquivos .svelte
```bash
<script>
</script>
<main>
</main>
<style>
</style>
```  

## Declarações
```bash
<script>
	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Count: {count}
</button>
``` 

## If Else
```bash
<script>
	let x = 7;
</script>
{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}
```

## Each
```bash
<script>
	let items = [1,2,3]
</script>
<ul>
	{#each items as item}
		<li>
			{item}			
		</li>
	{/each}
</ul>
```

## Store
```bash
<script>
	import { count } from './stores.js';
  
	let countValue;
  
	count.subscribe(value => {
		countValue = value;
	});
</script>
```

## Toast:	
```bash
npm i -D @zerodevx/svelte-toast
```

## Desabilitar SSR:
```bash
routes/+layout.js
export const ssr = false;
```
  
## Deploy automático:
```bash
Cloudflare Pages
Netlify
Vercel
Azure Static Web Apps
```

## Adapters:
```bash
Cloudflare Workers
Node servers
static site generation (SSG)

npm i -D @sveltejs/adapter-static

svelte.config.js

import adapter from '@sveltejs/adapter-static';
```

## Vercel/Netlify
```bash
Código no repositório do github
Criar conta na Vercel/Netlify
Conectar ao github
Permissão para todos os repositórios ou específicos
Importar o repositório
Deploy
```
