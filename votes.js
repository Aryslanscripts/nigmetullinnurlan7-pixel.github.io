// votes.js
let votes = { kaz: 0, rus: 0 }; // хранение в памяти функции (данные сбросятся при деплое)

exports.handler = async function(event, context) {
  if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body);
    const choice = body.choice;
    if (choice === 'kaz' || choice === 'rus') {
      votes[choice]++;
    }
    return {
      statusCode: 200,
      body: JSON.stringify(votes)
    };
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify(votes)
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed'
  };
};
