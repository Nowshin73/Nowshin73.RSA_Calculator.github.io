function checkPrime(a){
   for ( c = 2 ; c <= a - 1 ; c++ )
   { 
      if ( a%c == 0 )
     return 0;
   }
   return 1;
}
function checkPrime1(){
	num = document.getElementById("num").value;
	result = checkPrime(num);
	   if ( result == 1 )
      document.getElementById("prime").innerHTML = "It's a prime number";
   else
       document.getElementById("prime").innerHTML = "It's not a prime number, choose another number";
}
function multiply()
{
        p = document.getElementById("p").value;
       q = document.getElementById("q").value;
        document.getElementById("n").innerHTML = p * q;
		 document.getElementById("r").innerHTML = (p-1)*(q-1);
}
function checkE(){
	p = document.getElementById("p").value;
       q = document.getElementById("q").value;
	    e = document.getElementById("e").value;
       r = (p-1)*(q-1);
    prime = gcd(e,r);
	if( prime == 1){
		
	 document.getElementById("m").innerHTML = "E is relative prime of R";
	}
	else {
	document.getElementById("m").innerHTML = "E is not relative prime of R";
	}
}
function gcd(a, b) {
	  var R;
	  while ((a % b) > 0)  {
		R = a % b;
		a = b;
		b = R;
	  }
	  return b;
	}

function inverseMulti( a, m) 
		{ 
			a = a%m; 
			for ( x=1; x<m; x++) 
			   if ((a*x) % m == 1) 
				  return x; 
		} 
function generateD(){
	p = document.getElementById("p").value;
       q = document.getElementById("q").value;
	    e = document.getElementById("e").value;
       r = (p-1)*(q-1);
    prime = gcd(e,r);
	if( prime == 1 ){
		D = inverseMulti( e,r);
		if( D < r){
		document.getElementById("d").innerHTML = D;
		}
	}
	else {
	document.getElementById("no").innerHTML = "E is not relative prime of R, D cannot be generated";
	}
}
/*function asci(){
	m = document.getElementById("msg").value;
	for (var i = 0; i < string.length; i ++)
    z = m.push(string[i].charCodeAt(0));
    document.getElementById("demsg").innerHTML = z;
}*/

 function acii(msg){
	p = document.getElementById("p").value;
       q = document.getElementById("q").value;
	   e = document.getElementById("e").value;
       n = p * q;
	   s = msg;
      for(i=0; i < s.length ;i++){
		m = s.charCodeAt(i);
		c = PowerMod(m,e,n);
       /*document.getElementById("demsg").innerHTML = c;	
      document.getElementById("asc").innerHTML = m;*/
	  }
	 	return c; 
}
function encrypt(){
if(msg1 = document.getElementById("msg1").value){
   document.getElementById("demsg1").innerHTML = acii(msg1);
   } 
if(msg2 = document.getElementById("msg2").value){
	   document.getElementById("demsg2").innerHTML =acii(msg2);
}
if( msg3 = document.getElementById("msg3").value){
	   document.getElementById("demsg3").innerHTML =acii(msg3);
}
if(msg4 = document.getElementById("msg4").value){
	  document.getElementById("demsg4").innerHTML = acii(msg4);
}
if( msg5 = document.getElementById("msg5").value){
	   document.getElementById("demsg5").innerHTML =acii(msg5);
}
if(msg6 = document.getElementById("msg6").value){
	  document.getElementById("demsg6").innerHTML = acii(msg6);
}
if( msg7 = document.getElementById("msg7").value){
	   document.getElementById("demsg7").innerHTML =acii(msg7);
}
}

function PowerMod(x,p,N)
		// Compute x^p mod N
		{
			var A = 1
			var m = p
			var t = x
			
			while( m > 0 )
			{
				k = Math.floor( m/2 )
				r = m - 2*k
				if( r == 1 )
					A = (A*t)% N 
				t = t*t% N ;
				m = k
			}			
			return A
		}
function decrypt(cipher){
			p = document.getElementById("p").value;
       q = document.getElementById("q").value;
	    e = document.getElementById("e").value;
		 n = p * q;
       r = (p-1)*(q-1);
	   d = inverseMulti( e,r);
	   /*for(i=0; i < s.length ;i++){
		m = s.charCodeAt(i);
		c = PowerMod(m,e,n);*/
		c = cipher;
		
        ascii = PowerMod(c,d,n);
		message = String.fromCharCode(ascii);
         
	  /* document.getElementById("lemsg").innerHTML = ascii;
	   document.getElementById("themsg").innerHTML = message;*/
	   return message;
		}
function decryption(){
	if(msg1 = document.getElementById("msg1").value){
		m1 = acii(msg1);
		document.getElementById("themsg1").innerHTML = decrypt(m1);	
	}
	if(msg2 = document.getElementById("msg2").value){
		m2 = acii(msg2);
			document.getElementById("themsg2").innerHTML = decrypt(m2);
	}
	if(msg3 = document.getElementById("msg3").value){
		m3 = acii(msg3);
		document.getElementById("themsg3").innerHTML = decrypt(m3);
	}
	if(msg4 = document.getElementById("msg4").value){
		m4 = acii(msg4);
		document.getElementById("themsg4").innerHTML = decrypt(m4);
	}
	if(msg5 = document.getElementById("msg5").value){
		m5 = acii(msg5);
	    document.getElementById("themsg5").innerHTML = decrypt(m5);	
	}
	if(msg6 = document.getElementById("msg6").value){
		m6 = acii(msg6);
		document.getElementById("themsg6").innerHTML = decrypt(m6);
	}
	if(msg7 = document.getElementById("msg7").value){
		m7 = acii(msg7);
		document.getElementById("themsg7").innerHTML = decrypt(m7);
	}
	
	
}