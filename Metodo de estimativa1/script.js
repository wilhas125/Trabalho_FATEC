function comparePrices() {
    var appName = document.getElementById('app-name').value;
    var appSize = document.getElementById('app-size').value;
  
    // Fórmula de comparação de preços para cada provedor
    var awsPrice = calculateAWSPrice(appName, appSize);
    var azurePrice = calculateAzurePrice(appName, appSize);
    var gcpPrice = calculateGCPPrice(appName, appSize);
  
    var cheapestProvider = '';
    var cheapestPrice = Math.min(awsPrice, azurePrice, gcpPrice);
  
    if (cheapestPrice === awsPrice) {
      cheapestProvider = 'AWS';
    } else if (cheapestPrice === azurePrice) {
      cheapestProvider = 'Azure';
    } else {
      cheapestProvider = 'GCP';
    }
  
    document.getElementById('cheapest-provider').innerHTML = `A aplicação "${appName}" é mais barata para subir na nuvem através do provedor ${cheapestProvider}.`;
  }
  
  function calculateAWSPrice(appName, appSize) {
    // Lógica para calcular o preço no AWS para cada aplicação
    switch (appName) {
      case 'WordPress':
        return 0.0014 * appSize;
      case 'Magento':
        return 0.0018 * appSize;
      case 'Node.js':
        return 0.0016 * appSize;
      // Adicione mais casos para outras aplicações
      default:
        return 0;
    }
  }
  
  function calculateAzurePrice(appName, appSize) {
    // Lógica para calcular o preço no Azure para cada aplicação
    switch (appName) {
      case 'WordPress':
        return 0.0015 * appSize;
      case 'Magento':
        return 0.0017 * appSize;
      case 'Node.js':
        return 0.0019 * appSize;
      // Adicione mais casos para outras aplicações
      default:
        return 0;
    }
  }
  
  function calculateGCPPrice(appName, appSize) {
    // Lógica para calcular o preço no GCP para cada aplicação
    switch (appName) {
      case 'WordPress':
        return 0.0013 * appSize;
      case 'Magento':
        return 0.0016 * appSize;
      case 'Node.js':
        return 0.0017 * appSize;
      // Adicione mais casos para outras aplicações
      default:
        return 0;
    }
  }
  