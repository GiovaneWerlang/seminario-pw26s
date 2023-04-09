<script lang="ts">
	import { goto } from "$app/navigation";
    import { success, warning, failure } from './../../utils/toast';
    import { store } from "../../utils/store";
    import { nextId } from "../../utils/store";
	import { onMount } from "svelte";

    let next = 1;

    onMount(() => {
        nextId.subscribe( value => next = value)
    })

    let erroNome: string | undefined = undefined;
    let erroCpf: string | undefined = undefined;
    let erroEmail: string | undefined = undefined;

    function nova():any{
        return {
            id: 0,
            nome:'',
            cpf:'',
            email:'',
            telefone:'',
            rua:'',
            numero:'',
            complemento:'',
            bairro:'',
            cep:'',
            cidade:'',
            estado:''
        }        
    }

    let pessoa = nova();

    function limpar(){
        pessoa = nova();
        erroNome = undefined;
        erroCpf = undefined;
        erroEmail = undefined;
    }   

    function salvar(){
        
        if(validaPessoa()){
            let pos = $store.length;
            pessoa.id = next;
            $store[pos] = pessoa;
            $nextId++;
            setTimeout( function() { goto('/lista')} ,1000);    
            success('Registro incluído!');
        }else{
            warning('Não foi possível incluir o registro!\nCampos preenchidos incorretamente.');                            
        }
 
    }

    function validaPessoa(){
        let valido = true;
        if(pessoa.nome === ''){
            valido = false;
            erroNome = "Campo obrigatório";
        }else{
            erroNome = undefined;
        }
        if(pessoa.cpf === ''){
            valido = false;
            erroCpf = "Campo obrigatório";
        }else{
            erroCpf = undefined;
        }
        if(pessoa.email === ''){
            valido = false;
            erroEmail = "Campo obrigatório";
        }else{
            erroEmail = undefined;
        }

        return valido;
    }
  
 
</script>
<main>
    <div>
        <form>
            <div class="item item-col-3">
                <label>
                    Nome
                    <input type="text" class="campos" bind:value={pessoa.nome}/>
                    {#if erroNome}
                    <div class="erro">
                        {erroNome}
                    </div>
                    {/if}
                </label>
    
            </div>        
            <div class="item">
                <label>
                    CPF
                    <input type="text" class="campos" bind:value={pessoa.cpf}/>
                    {#if erroCpf}
                        <div class="erro">
                            {erroCpf}
                        </div>
                    {/if}
                </label>
            </div>
            <div class="item item-col-2">
                <label>
                    E-mail
                    <input type="text" class="campos" bind:value={pessoa.email}/>
                    {#if erroEmail}
                    <div class="erro">
                        {erroEmail}
                    </div>
                    {/if}
                </label>
            </div>
            <div class="item">
                <label>
                    Telefone
                    <input type="text" class="campos" bind:value={pessoa.telefone}/>
                </label>
            </div>
            <div class="item item-col-2">
                <label>
                    Rua
                    <input type="text" class="campos" bind:value={pessoa.rua}/>
                </label>
            </div>
            <div class="item">
                <label>
                    Número
                    <input type="text" class="campos" bind:value={pessoa.numero}/>
                </label>
            </div>
            <div class="item item-col-2">
                <label>
                    Complemento
                    <input type="text" class="campos" bind:value={pessoa.complemento}/>
                </label>
            </div>
            <div class="item item-col-2">
                <label>
                    Bairro
                    <input type="text" class="campos" bind:value={pessoa.bairro}/>
                </label>
            </div>
            <div class="item">
                <label>
                    CEP
                    <input type="text" class="campos" bind:value={pessoa.cep}/>
                </label>
            </div>
            <div class="item item-col-2">
                <label>
                    Cidade
                    <input type="text"  class="campos" bind:value={pessoa.cidade}/>
                </label>
            </div>
            <div class="item">
                <label>
                    Estado
                    <input type="text" class="campos" bind:value={pessoa.estado}/>
                </label>
            </div>
            <div>
                <input type="submit" value="Salvar" class="botoes salvar" on:click={salvar}>
                <button  class="botoes limpar" on:click={limpar}>Limpar</button>
            </div>
        </form>
    </div>
</main>


<style>
    .erro{
       color: #eb2121;
       font-size: 14px;
    }

    form{
        text-align: start;
        color: #913a1e;
        justify-items: start;
        margin: auto;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
	    grid-auto-flow: dense;
        gap: 20px;
    } 

    .item{
        width: 100%;
    }

    .item-col-2{
        grid-column: span 2;
    }

    .item-col-3{
        grid-column: span 3;
    }

    label{
        height: 64px;
    }

    .campos{
        height: 30px;
        border: 1px  #E83800 solid;
        margin: 5px 0;
        border-radius: 3px;
        font-family: inherit;
	    font-size: 16px;
        width: 100%;
        background-color: #1f1311;
        color: #cebfbb;
    }

    .campos:hover{
        border: 1px #ff4000 solid;
    }

    .campos:focus{
        outline: none !important;
        border: 1px #ff4000 solid;
        box-shadow: inset 0 1px 1px #ff4000, 0 0 8px #E83800;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
        -webkit-text-fill-color: #cebfbb;
        -webkit-box-shadow: 0 0 0px 1000px #1f1413 inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    .botoes{
        border: none;
        border-radius: 5px;
        padding: 5px 15px;
        margin: 5px;
        height: 30px;
        width: 100px;
    }

    .limpar:hover{
        background-color: #fff;
        cursor: pointer;
    }

    .salvar{
        color: #cebfbb;
        background-color: #E83800;
    }

    .salvar:hover{
        background-color:#e64819;
        cursor: pointer;
    }

    .limpar{
        color: #848185;
    }
</style>