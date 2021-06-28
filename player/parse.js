if(Sitepcount>Sitepvodnum){
    MacPlayer.Html = '<iframe width="100%" height="100%" src="'+MacPlayer.Parse + MacPlayer.PlayUrl+'?domain='+Sitepurl+'&next=//'+Sitepurl+''+parent.MacPlayer.NextUrl+'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';
MacPlayer.Show();
}else{
    MacPlayer.Html = '<iframe width="100%" height="100%" src="'+MacPlayer.Parse + MacPlayer.PlayUrl+'?domain='+Sitepurl+'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';
MacPlayer.Show();
}