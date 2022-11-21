let response;

exports.lambdaHandler = async (event, context) => {
  try {
    let name = event?.queryStringParameters?.name ?? "world";
    // optional chain (?.) はv14から使用可能
    // nullish coalescing operator (??) もv14かららしい

    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'hello ' + name,
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response
};
