class Pokemon {
  constructor(nameAbilities,defenseNum,attackNum,hpNum, pokemonNumber){
    this.nameAbilities = nameAbilities;
    this.defenseNum = defenseNum;
    this.attackNum = attackNum;
    this.hpNum = hpNum;
    this.pokemonNumber = pokemonNumber;

    //Where to put product
    this.container = document.getElementById('products');
    //make a div with classname product
    this.element = document.getElementById('test');
    // this.element.className = 'product';
  }

  display(){
    // console.log("Abilities"+this.pokemonNumber)
    document.getElementById("Abilities"+this.pokemonNumber).innerHTML = "Abilities: " + this.nameAbilities;
    document.getElementById("Defense"+this.pokemonNumber).innerHTML = "Defense: " + this.defenseNum;
    document.getElementById("Attack"+this.pokemonNumber).innerHTML = "Attack: " + this.attackNum;
    document.getElementById("Hp"+this.pokemonNumber).innerHTML = "Hp: " + this.hpNum;
   }
 }

axios.get
    ('https://fizal.me/pokeapi/api/v2/name/lapras.json')
      .then(function(response){
    // console.log(response.data);

    // All the abilities
    let abilities= response.data.abilities[0].ability.name;
    console.log(response.data.abilities[0].ability.name);
    // console.log(response.data.abilities[1].ability.name);
    // console.log(response.data.abilities[2].ability.name);

    // The defense
    let defense= response.data.stats[3].base_stat;
    console.log(response.data.stats[3].base_stat);

    // Attack
    let attack= response.data.stats[4].base_stat;
    console.log(response.data.stats[4].base_stat);

    // hp
    let hp = response.data.stats[5].base_stat;
    console.log(response.data.stats[5].base_stat);

    let Lapras= new Pokemon(abilities, defense, attack,hp, 1);
    console.log(Lapras);
    let laprasButton = document.getElementById('laprasButton');
    laprasButton.addEventListener('click', Lapras.display.bind(Lapras));
    taneeya.push(Lapras);
  });


axios.get
  ('https://fizal.me/pokeapi/api/v2/name/bellossom.json')
    .then(function(response){
  // console.log(response.data);

  // All the abilities
  let abilities= response.data.abilities[0].ability.name;
  console.log(response.data.abilities[0].ability.name);
  // console.log(response.data.abilities[1].ability.name);
  // console.log(response.data.abilities[2].ability.name);

  // The defense
  let defense= response.data.stats[3].base_stat;
  console.log(response.data.stats[3].base_stat);

  // Attack
  let attack= response.data.stats[4].base_stat;
  console.log(response.data.stats[4].base_stat);

  // hp
  let hp = response.data.stats[5].base_stat;
  console.log(response.data.stats[5].base_stat);

  let Bellossom= new Pokemon(abilities, defense, attack,hp, 2);
  console.log(Bellossom);
  let bellssomButton = document.getElementById('BellossomButton');
  bellssomButton.addEventListener('click', Bellossom.display.bind(Bellossom));
  taneeya.add(Bellossom);
});

  axios.get
    ('https://fizal.me/pokeapi/api/v2/name/luxio.json')
      .then(function(response){
    // console.log(response.data);

    // All the abilities
    let abilities= response.data.abilities[0].ability.name;
    console.log(response.data.abilities[0].ability.name);
    // console.log(response.data.abilities[1].ability.name);
    // console.log(response.data.abilities[2].ability.name);

    // The defense
    let defense= response.data.stats[3].base_stat;
    console.log(response.data.stats[3].base_stat);

    // Attack
    let attack= response.data.stats[4].base_stat;
    console.log(response.data.stats[4].base_stat);

    // hp
    let hp = response.data.stats[5].base_stat;
    console.log(response.data.stats[5].base_stat);

    let Luxio= new Pokemon(abilities, defense, attack,hp, 3);
    console.log(Luxio);
    let luxioButton = document.getElementById('LuxioButton');
    luxioButton.addEventListener('click', Luxio.display.bind(Luxio));
    taneeya.add(Luxio);

});

   // function laprasDisplay(){
   //   document.getElementById("Abilities1").innerHTML = "Abilities: Hydration";
   //   document.getElementById("Defense1").innerHTML = "Defense: 80";
   //   document.getElementById("Attack1").innerHTML = "Attack: 85";
   //   document.getElementById("Hp1").innerHTML = "Hp: 130";
   // }


   // function bellossomDisplay(){
   //   document.getElementById("Abilities2").innerHTML = "Abilities: Healer ";
   //   document.getElementById("Defense2").innerHTML = "Defense: 95";
   //   document.getElementById("Attack2").innerHTML = "Attack: 80";
   //   document.getElementById("Hp2").innerHTML = "Hp: 75";
   // }
   //
   // function luxioDisplay(){
   //   document.getElementById("Abilities3").innerHTML = "Abilities: guts";
   //   document.getElementById("Defense3").innerHTML = "Defense: 49";
   //   document.getElementById("Attack3").innerHTML = "Attack: 85";
   //   document.getElementById("Hp3").innerHTML = "Hp: 60";
   // }

   class Trainer{
     constructor(){
       this.pokeInfo=[];
   }
   all(){
     return this.pokeInfo;
   }
   add(info){
    this.pokeInfo.push(info);
  }
    get(name){
      for(let i=0;i<this.pokeInfo.length;i++){
             if(name === this.pokeInfo[i].name){
             return this.pokeInfo[i];
            }
          }
        }
      }

   let taneeya = new Trainer();
