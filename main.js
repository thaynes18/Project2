class Pokemon {
  constructor(nameAbilities,defenseNum,attackNum,hpNum){
    this.nameAbilities = nameAbilities;
    this.defenseNum = defenseNum;
    this.attackNum = attackNum;
    this.hpNum = hpNum;

    // //Where to put product
    // this.container = document.getElementById('products');
    // //make a div with classname product
    // this.element = document.createElement('div');
    // this.element.className = 'product';
  }



  axios.get('http://fizal.me/pokeapi/api/v2/name/lapras.json')
  .then(putProducts);
  function putProducts(response){
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
    
    console.log(response.data.stats[5].base_stat);
  }
