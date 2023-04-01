<script>
// @ts-nocheck
  import { store } from "../../utils/store";
  import { onMount } from "svelte";

  let lista = [];

  onMount(() => {
    store.subscribe((values) => {
        lista = values;
    })
  })

  let colunas = ["ID", "Nome", "CPF", "E-mail","Telefone","Ações"]



    function deletar(id) {
		$store = $store.filter(function(value, index, arr){ 
			if (value.id != id) return value;
		});
	}

</script>
    <main>
        <div>
            {#if lista.length > 0}

            <table>
                <thead>
                    <tr>
                        {#each colunas as coluna}
                            <th>{coluna}</th>
                        {/each}
                    </tr>
                </thead>
                <tbody>
                    {#each lista as pessoa}
                    <tr>
                        <td>{pessoa.id}</td>
                        <td>{pessoa.nome}</td>
                        <td>{pessoa.cpf}</td>
                        <td>{pessoa.email}</td>
                        <td>{pessoa.telefone}</td>
                        <td>
                            <a href="/inserir/{pessoa.id}" class="botoes editar">Editar</a>
                            |
                            <button class="botoes deletar" on:click={deletar(pessoa.id)}>Deletar</button>
                        </td>
                    </tr>
                    {/each}           
                </tbody>
            </table>
            {:else}
                <p>Não há pessoas cadastradas.</p>
            {/if}
        </div>
    </main>
 
<style>
    table{
        height: 100%;
        width: 100%;
        border-radius: 5px;
        background-color: #1f1311;
        margin: 15px auto;
        border-collapse: collapse;
        color: #cebfbb;
    }

    thead{
        background-color: #ff4000;
        text-align: center;
        padding: 5px 5px;
    }

    tr, td{
        border-collapse: collapse;
        text-align: center;
        padding: 5px;
    }


    th{
        padding: 10px;
    }

    td{
        color: #ff4000;
        padding: 10px;
    }

    tbody tr:hover{
        cursor: pointer;
        background-color: #1a100f;
    }

    a{
        padding: 0 10px;
        text-decoration: none;
    }

    thead:hover{
        cursor: default;
        background-color: #E83800 ;
    }

    .botoes{
        border: none;
        border-radius: 5px;
        padding: 5px 15px;
        margin: 5px;
    }

    .deletar:hover{
        background-color: #fff;
        cursor: pointer;
    }

    .editar:hover{
        background-color:#e64819;
        cursor: pointer;
    }

    .editar{
        color: #cebfbb;
        background-color: #E83800;
        padding: 3px 15px;
        font-size: 14px;
    }

    .deletar{
        color: #848185;
    }
</style>