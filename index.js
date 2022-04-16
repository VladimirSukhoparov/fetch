const getCardCreate = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();

    const card=document.querySelector('.card');
    const cardList=document.querySelector('.card_list');
    
    for (let i=1;i<result.length;i++){
        const cards=card.cloneNode(true);
        
        cards.querySelector('.title').innerText += '  ' + result[i].title;
        cards.querySelector('.userId').innerText += '  ' + result[i].userId;
        cards.querySelector('.id').innerText += '  ' + result[i].id;
        cards.querySelector('.body').innerText += '  ' + result[i].body;

        cardList.append(cards);
    }

    document.body.querySelector('.title').innerText += ' ' + result[0].title;
    document.body.querySelector('.userId').innerText += ' ' + result[0].userId;
    document.body.querySelector('.id').innerText += ' ' + result[0].id;
    document.body.querySelector('.body').innerText += ' ' + result[0].body;

};

getCardCreate();
