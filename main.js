class Pokemon {
  constructor(nameAbilities,defenseNum,attackNum,hpNum){
    this.nameAbilities = nameAbilities;
    this.defenseNum = defenseNum;
    this.attackNum = attackNum;
    this.hpNum = hpNum;

    //Where to put product
    this.container = document.getElementById('products');
    //make a div with classname product
    this.element = document.getElementById('test');
    this.element.className = 'product';

  }

  display(){
    let abilities = document.querySelector('p');
    abilities.innerHTML = this.nameAbilities;
    this.element.appendChild(abilities);

   let defense = document.querySelector('p');
  defense.innerHTML = this.defenseNum;
   this.element.appendChild(defense);

   let attack = document.querySelector('p');
  attack.innerHTML = this.attackNum;
   this.element.appendChild(attack);

   let hp = document.querySelector('p');
  hp.innerHTML = this.hpNum;
   this.element.appendChild(hp);

   this.container.appendChild(this.element);



  }
}



  axios.get
    ('http://fizal.me/pokeapi/api/v2/name/lapras.json')
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



    let Lapras= new Pokemon (abilities, defense, attack,hp);
    console.log(Lapras);
    Lapras.display();
});




axios.get
  ('http://fizal.me/pokeapi/api/v2/name/Bellossom.json')
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



  let Bellossom= new Pokemon (abilities, defense, attack,hp);
  console.log(Bellossom);
  Bellossom.display();
  });
