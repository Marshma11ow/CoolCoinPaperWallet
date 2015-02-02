function generateWallet() {

    var key = bitcoin.ECKey.makeRandom();
    var pubkey = key.pub.getAddress().toString();
    var prikey = key.toWIF();

    document.write(pubkey);
    document.write('&nbsp;<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>&nbsp;');
    document.write(prikey);

    $('#pubkey').qrcode({width: 100, height: 100, text: pubkey});
    $('#prikey').qrcode({width: 100, height: 100, text: prikey});

}
