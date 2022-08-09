var pesan = 'Boy, Mau Ngapain ?'; 
   
  function klik_IE() /* fungsi ini khusus pada web browser IE. */
  { /*event merupakan syntax yg digunakan untuk menangangi suatu aksi user.*/
    if (event.button == 2){  /* ketika user mengklik kanan maouse */
      alert(pesan); 
    } 
  }
  /* e dalam hal inin mengidentifikasi event yg terjadi bukan parameter. */
  /* fungsi ini khusus untuk browser keluarga netscape(navigator, mozilla dan firefox)*/
  /* tanda || artinya atau = or  tanda && artinya dan = and*/
  function klik_NS(e) 
  { 
    if (document.layers || document.getElementById && !document.all){ 
      if (e.which == 2 || e.which == 3){ 
        alert(pesan); 
      } 
    } 
  } 
   
  if (document.layers) 
  { 
    document.captureEvents(event.mousedown); /* fungsinya jika pada dokumen terjadi event klik jalankan klik_NS*/
    document.onmousedown = klik_NS; /* fungsi klik_NS akan munculkan box warning jika hanya tombol mouse yg diklik.*/
                                    /* arti dari kode dibawahnya juga sama*/
  
  } 
  else if (document.all && !document.getElementById) 
  { 
    document.onmousedown = klik_IE; 
  } 
 
  document.oncontextmenu = new Function("alert(pesan); return false")