import { writable } from "svelte/store";

export const nextId = writable(11);

export const store = writable([
{id:1, nome:'Dolorita', cpf:'7117006110', email:'dhiggen0@abc.net.au', telefone:'3986384965', rua:'Novick', numero:'068', complemento:'Junction', bairro:'Concrete Finisher', cep:'80774809', cidade: 'Parnamirin', estado: 'Paraná'},
{id:2, nome:'Gabrielle', cpf:'6434385986', email:'gstacy1@dot.gov',  telefone:'5066752417', rua:'Barby', numero:'7675', complemento:'Court', bairro:'Waterproofer', cep:'83975402', cidade:'João Pessoa', estado:'Paraíba'},
{id:3, nome:'Chiarra', cpf:'0066393604', email:'celsop2@home.pl',  telefone:'5744010119', rua:'Hollow Ridge', numero:'4010', complemento:'Trail',bairro: 'Sheet Metal Worker', cep:'57673688', cidade:'Joinville', estado:'Santa Catarina'},
{id:4, nome:'Corny', cpf:'6528189978', email:'cgrzesiak3@abc.net.au',  telefone:'1243033656',rua: 'Pepper Wood', numero:'100', complemento:'Terrace', bairro:'Brickmason', cep:'22041635', cidade:'Santos', estado:'São Paulo'},
{id:5, nome:'Gardner', cpf:'6302060168', email:'gducrow4@bloglines.com',  telefone:'7101390512', rua:'Service', numero:'7435', complemento:'Avenue', bairro:'Refridgeration', cep:'13281109', cidade:'Petrópolis', estado:'Rio de Janeiro'},
{id:6, nome:'Leticia', cpf:'1692045717', email:'lfiorentino5@kickstarter.com',  telefone:'6575258680', rua:'Holmberg', numero:'43778', complemento:'Park', bairro:'Stucco Mason', cep:'82399704', cidade:'Vitória', estado:'Espírito Santo'},
{id:7, nome:'Maribelle', cpf:'3929687127', email:'mingleby6@people.com.cn',  telefone:'8561727512', rua:'Crescent Oaks', numero:'776', complemento:'Terrace', bairro:'Terrazzo', cep:'54560794', cidade:'Belo Horizonte', estado:'Minas Gerais'},
{id:8, nome:'Madelaine', cpf:'9499335307',email: 'mbarnsdale7@senate.gov',  telefone:'9106195139', rua:'Manley', numero:'466', complemento:'Junction', bairro:'Boilermaker', cep:'11746807', cidade:'Goiânia', estado:'Goiás'},
{id:9, nome:'Paco', cpf:'0403274001', email:'pfeldheim8@freewebs.com',  telefone:'1618062710', rua:'Texas', numero:'8595', complemento:'Junction', bairro:'Laborer', cep:'87104734', cidade:'Salvador', estado:'Bahia'},
{id:10, nome:'Feliza', cpf:'1307537243', email:'fgellert9@nifty.com',  telefone:'1086690253', rua:'Washington', numero:'3091', complemento:'Drive', bairro:'Pipefitter', cep:'56515906', cidade:'Cuiabá', estado:'Mato Grosso'}
]);