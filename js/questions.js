/* Generator soal aritmetika acak: operasi dasar, campuran, prioritas, pecahan sederhana, pangkat. */
(() => {
  const rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
  const pick=a=>a[Math.floor(Math.random()*a.length)];
  const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a)||1;
  const fmt=n=>Number.isInteger(n)?String(n):String(Number(n.toFixed(2)));
  function question(text,answer,wrong,explanation){
    const correct=String(answer), choices=[...new Set(wrong.map(String).filter(x=>x!==correct))];
    while(choices.length<3){let v=String(Number(correct)+(choices.length+1)*rand(1,4));if(v!==correct&&!choices.includes(v))choices.push(v);}
    const operation=/²|³/.test(text)?'perpangkatan':(/[+−×÷]/.test(text)&&/[()]/.test(text)&&(/[+−×÷]/g.test(text))?'campuran':text.includes('+')?'penjumlahan':text.includes('−')? 'pengurangan':text.includes('×')?'perkalian':text.includes('÷')?'pembagian':'campuran');const complexity=(text.match(/[×÷²³()]/g)||[]).length+(text.match(/[+−-]/g)||[]).length;const difficulty=complexity>=4?'sulit':complexity>=2?'sedang':'ringan';return {text,answer:correct,operation,choices:[...choices.slice(0,3),correct].sort(()=>Math.random()-.5),explanation,difficulty};
  }
  const basic=(level)=>{
    const a=rand(1,level=== 'mudah'?20:80), b=rand(1,level==='mudah'?12:45), op=pick(['+','−','×','÷']);
    if(op==='+')return question(`${a} + ${b} = …`,a+b,[a-b,a+b+rand(1,8),a*b],`Jumlahkan ${a} dan ${b}: hasilnya ${a+b}.`);
    if(op==='−')return question(`${a} − ${b} = …`,a-b,[b-a,a+b,a-b-rand(1,5)],`Kurangkan ${b} dari ${a}: hasilnya ${a-b}.`);
    if(op==='×'){const x=rand(1,level==='mudah'?10:18),y=rand(1,level==='mudah'?10:16);return question(`${x} × ${y} = …`,x*y,[x+y,x*y+x,Math.max(0,x*y-y)],`${x} dikali ${y} sama dengan ${x*y}.`);}
    const divisor=rand(2,level==='mudah'?10:16),result=rand(1,level==='mudah'?10:20),num=divisor*result;
    return question(`${num} ÷ ${divisor} = …`,result,[num-divisor,divisor/result,result+divisor],`${num} dibagi ${divisor} sama dengan ${result}.`);
  };
  function make(level){
    if(level==='mudah'){
      if(Math.random()<.45)return basic(level);
      const a=rand(1,12),b=rand(1,12),c=rand(1,8),kind=rand(0,2);
      if(kind===0)return question(`${a} + ${b} − ${c} = …`,a+b-c,[a+b+c,a-b+c,a+b-c+2],`Kerjakan dari kiri ke kanan: ${a}+${b}−${c}=${a+b-c}.`);
      if(kind===1)return question(`${a} + ${b} × 2 = …`,a+b*2,[ (a+b)*2,a+b+2,a*b+2],`Perkalian lebih dahulu: ${b}×2=${b*2}, lalu tambah ${a} menjadi ${a+b*2}.`);
      return question(`(${a} + ${b}) × ${c} = …`,(a+b)*c,[a+b*c,a*c+b,a+b+c],`Kerjakan kurung dahulu: (${a}+${b})×${c}=${(a+b)*c}.`);
    }
    if(level==='sedang'){
      const kind=rand(0,4),a=rand(5,35),b=rand(2,15),c=rand(2,9);
      if(kind===0)return basic(level);
      if(kind===1){const x=rand(2,12),y=rand(2,10);return question(`${x} × ${y} − ${b} = …`,x*y-b,[x*(y-b),x*y+b,x+y-b],`Kerjakan perkalian dulu: ${x}×${y}=${x*y}, kemudian kurangi ${b}.`);}
      if(kind===2)return question(`${a} − (${b} × ${c}) = …`,a-b*c,[ (a-b)*c,a-b+c,a+b*c],`Kurung/perkalian: ${b}×${c}=${b*c}; ${a}−${b*c}=${a-b*c}.`);
      if(kind===3){const n=rand(2,10);return question(`−${n} + ${a} = …`,a-n,[n-a,a+n,-a-n],`Mulai dari ${a}, kurangi ${n}: hasilnya ${a-n}.`);}
      const den=pick([2,3,4,5]),num=rand(1,den-1);return question(`${num}/${den} + ${num}/${den} = …`,`${2*num}/${den}`,[`${num}/${den}`,`${num+1}/${den}`,`${2*num}/${den+1}`],`Penyebut sama, jumlahkan pembilang: ${num}+${num}=${2*num}, jadi ${2*num}/${den}.`);
    }
    const kind=rand(0,5),a=rand(2,12),b=rand(2,9),c=rand(2,8),d=rand(2,6);
    if(kind===0)return question(`(${a} + ${b}) × ${c} − ${d} = …`,(a+b)*c-d,[a+b*c-d,(a+b)*(c-d),a+b*c+d],`Kurung dahulu: ${a}+${b}=${a+b}; lalu ×${c} dan −${d} menghasilkan ${(a+b)*c-d}.`);
    if(kind===1)return question(`${a}² + ${b} × ${c} = …`,a*a+b*c,[ (a+b)**2,a*a+b+c,a*a-b*c],`Pangkat dan perkalian lebih dahulu: ${a}²=${a*a}, ${b}×${c}=${b*c}; jumlahnya ${a*a+b*c}.`);
    if(kind===2){const x=rand(2,9),y=rand(2,8);return question(`${x}³ ÷ ${x} + ${y} = …`,x*x+y,[x**3/(x+y),x*x-y,x**3+x+y],`${x}³=${x**3}; bagi ${x} menjadi ${x*x}, lalu tambah ${y}.`);}
    if(kind===3)return question(`${a} − (${b} − ${c}) × ${d} = …`,a-(b-c)*d,[ (a-b-c)*d,a-(b-c+d),a-(b+c)*d],`Kurung: ${b}−${c}=${b-c}; kalikan ${d}, lalu kurangi dari ${a}.`);
    if(kind===4){const x=rand(2,10),y=rand(2,8);return question(`(${x} × ${y} + ${x}) ÷ ${x} = …`,y+1,[y,x+y,x*y+1],`Di dalam kurung: ${x*y}+${x}=${x*(y+1)}; dibagi ${x} hasilnya ${y+1}.`);}
    return basic(level);
  }
  function makeOperation(level,op){for(let i=0;i<40;i++){const q=make(level);if(q.operation===op)return q;}return make(level)}
  window.QuestionBank={make,makeOperation,levels:{mudah:{label:'PENJELAJAH',seconds:30,waves:5,enemySpeed:1.05},sedang:{label:'PENJAGA',seconds:20,waves:5,enemySpeed:1.45},sulit:{label:'LEGENDARIS',seconds:5,waves:5,enemySpeed:1.9}}};
})();
