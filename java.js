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
	if( prime == 1){
		document.getElementById("d").innerHTML = inverseMulti( e,r);
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

 function acii(){
	p = document.getElementById("p").value;
       q = document.getElementById("q").value;
       n = p * q;
	s = document.getElementById("msg").value;
      /*for(i=0; i < s.length ;i++){*/
		m = s.charCodeAt(i);
		c = PowerMod(m,e,n);
       document.getElementById("demsg").innerHTML = c;	
       /*document.getElementById("asc").innerHTML = m;
	  }*/
        	   
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
function decrypt(){
			p = document.getElementById("p").value;
       q = document.getElementById("q").value;
	    e = document.getElementById("e").value;
		 n = p * q;
       r = (p-1)*(q-1);
	   d = inverseMulti( e,r);
	   for(i=0; i < s.length ;i++){
		m = s.charCodeAt(i);
		c = PowerMod(m,e,n);
        ascii = PowerMod(c,d,n);
		message = String.fromCharCode(ascii);
        }	 
	  /* document.getElementById("lemsg").innerHTML = ascii;*/
	   document.getElementById("themsg").innerHTML = message;
		}