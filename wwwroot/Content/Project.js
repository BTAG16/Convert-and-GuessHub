import { Start as Start_1 } from "./WebSharper.Core.JavaScript/Runtime.js"
import { Lazy, MarkResizable, SetOptional, Create as Create_1, Force, GetOptional, CreateFuncWithArgs, DeleteEmptyFields, OnLoad } from "./WebSharper.Core.JavaScript/Runtime.js"
function isIDisposable(x){
  return"Dispose"in x;
}
function Main(){
  return _c.Main;
}
function router(){
  return _c.router;
}
function currentPage(){
  return _c.currentPage;
}
let _c=Lazy((_i) => class $StartupCode_Client {
  static {
    _c=_i(this);
  }
  static Main;
  static currentPage;
  static router;
  static {
    this.router=Router_EndPoint();
    this.currentPage=InstallHash({$:0}, router());
    const P=_c_12.EmbedView(Map((link) => link.$==1?GuessingGamePage():link.$==2?CurrencyConverterPage():HomePage(), currentPage().View));
    const this_1=new _c_3("New_1");
    const this_2=(this_1.h.push(new _c_10("home", "/")),this_1);
    const this_3=(this_2.h.push(new _c_10("guessing", "/#/guessing")),this_2);
    const this_4=(this_3.h.push(new _c_10("currency", "/#/currency")),this_3);
    const builder=(this_4.h.push(new _c_9("pagecontent", P)),this_4);
    const p=CompleteHoles(builder.k, builder.h, []);
    let _1=builder.i=new _c_8(p[1], RunFullDocTemplate(p[0]));
    this.Main=_1;
  }
});
function New(Parse_1, Write_1){
  return{Parse:Parse_1, Write:Write_1};
}
let _c_1=Lazy((_i) => class Object_1 {
  static {
    _c_1=_i(this);
  }
  Equals(obj){
    return this===obj;
  }
  GetHashCode(){
    return -1;
  }
});
let _c_2=Lazy((_i) => class Var extends _c_1 {
  static {
    _c_2=_i(this);
  }
});
function Router_EndPoint(){
  return JSUnion(void 0, [[null, [[null, []]], []], [null, [[null, ["guessing"]]], []], [null, [[null, ["currency"]]], []]]);
}
function guessinggame(h){
  LoadLocalTemplates("index");
  return h?NamedTemplate("index", Some("guessinggame"), h):void 0;
}
function currencyconverter(h){
  LoadLocalTemplates("index");
  return h?NamedTemplate("index", Some("currencyconverter"), h):void 0;
}
function homep(h){
  LoadLocalTemplates("index");
  return h?NamedTemplate("index", Some("homep"), h):void 0;
}
function InstallHash(onParseError, router_1){
  const var_1=_c_7.Create_1(void 0);
  InstallHashInto(var_1, onParseError, router_1);
  return var_1;
}
function InstallHashInto(var_1, onParseError, router_1){
  const parse=(h) => Parse(router_1, _c_6.FromHash(h, Some(true)));
  const cur=() => getCurrentHash(parse, onParseError);
  const set_1=(value) => {
    if(!Equals(var_1.Get(), value))var_1.Set(value);
  };
  set_1(cur());
  globalThis.addEventListener("popstate", () => set_1(cur()), false);
  globalThis.addEventListener("hashchange", () => set_1(cur()), false);
  globalThis.document.body.addEventListener("click", (ev) => {
    let o;
    const o_1=findLinkHref(ev.target);
    if(o_1==null)o=null;
    else {
      const href=o_1.$0;
      o=StartsWith(href, "#")?parse(href):null;
    }
    return o==null?null:(set_1(o.$0),ev.preventDefault());
  }, false);
  Sink((value) => {
    if(!Equals(value, cur())){
      const url=HashLink(router_1, value);
      globalThis.history.pushState(null, null, url);
    }
  }, var_1.View);
}
function getCurrentHash(parse, onParseError){
  const h=globalThis.location.hash;
  const m=parse(h);
  return m==null?((((_1) =>(_2) => _1("Failed to parse route: "+toSafe(_2)))((s) => {
    console.log(s);
  }))(h),onParseError):m.$0;
}
function findLinkHref(n){
  while(true)
    {
      if(n.tagName=="A")return ofObj(n.getAttribute("href"));
      else if(n===globalThis.document.body)return null;
      else n=n.parentNode;
    }
}
function get(arr, n){
  checkBounds(arr, n);
  return arr[n];
}
function checkBounds(arr, n){
  if(n<0||n>=arr.length)FailWith("Index was outside the bounds of the array.");
}
function length(arr){
  return arr.dims===2?arr.length*arr.length:arr.length;
}
function set(arr, n, x){
  checkBounds(arr, n);
  arr[n]=x;
}
function toInt(x){
  const u=toUInt(x);
  return u>=2147483648?u-4294967296:u;
}
function FailWith(msg){
  throw new Error(msg);
}
function toUInt(x){
  return(x<0?Math.ceil(x):Math.floor(x))>>>0;
}
function KeyValue(kvp){
  return[kvp.K, kvp.V];
}
function range(min, max_1){
  const count=1+max_1-min;
  return count<=0?[]:init(count, (x) => x+min);
}
let _c_3=Lazy((_i) => class ProviderBuilder extends _c_1 {
  static {
    _c_3=_i(this);
  }
  i;
  k;
  h;
  s;
  static New_1(){
    return new this("New_1");
  }
  constructor(i){
    if(i=="New_1"){
      let c;
      super();
      this.i=null;
      this.k=(c=NewGuid(),String(c));
      this.h=MarkResizable([]);
      SetOptional(this, "s", null);
    }
  }
});
let _c_4=Lazy((_i) => class TemplateHole extends _c_1 {
  static {
    _c_4=_i(this);
  }
  ForTextView(){
    console.warn("Content hole filled with attribute data", this.Name);
    return null;
  }
  AddAttribute(a, a_1){
    console.warn("Var hole filled with non-Var data", this.Name);
  }
  get AsChoiceView(){
    console.warn("Attribute value hole filled with non-text data", this.Name);
    return Choice1Of2("");
  }
});
let _c_5=Lazy((_i) => class View {
  static {
    _c_5=_i(this);
  }
});
function GuessingGamePage(){
  const randomNumber=new _c_11();
  const secretNumber=_c_7.Create_1(randomNumber.Next(1, 101));
  const _1=_c_7.Create_1(0);
  const _2=_c_7.Create_1(0);
  const resultVar=_c_7.Create_1("");
  const restartGame=() => {
    _2.Set(0);
    _1.Set(0);
    secretNumber.Set(randomNumber.Next(1, 101));
  };
  const R=resultVar.View;
  const this_1=new _c_3("New_1");
  const t=(this_1.h.push(new _c_16("guess", _2)),this_1);
  const this_2=(t.h.push(EventQ2(t.k, "checkguess", () => t.i, () => {
    const guess=toInt(_2.Get());
    if(_1.Get()>=5){
      const failedMesage="Sorry, you have reached the maximum number of tries. The game has been restarted. The Secret Number was "+String(secretNumber.Get());
      restartGame();
      resultVar.Set(failedMesage);
    }
    else guess===secretNumber.Get()?(restartGame(),resultVar.Set("Congratulations! You guessed the correct number. The game has been restarted.")):guess<secretNumber.Get()?(_1.Set(_1.Get()+1),resultVar.Set("Try a higher number."),_2.Set(0)):(_1.Set(_1.Get()+1),resultVar.Set("Try a lower number."));
  })),t);
  const b=(this_2.h.push(new _c_15("result", R)),this_2);
  const p=CompleteHoles(b.k, b.h, [["guess", 1, null]]);
  const i=new _c_8(p[1], guessinggame(p[0]));
  let _3=(b.i=i,i);
  return _3.Doc;
}
function CurrencyConverterPage(){
  const _1=_c_7.Create_1(0);
  const _2=_c_7.Create_1("");
  const _3=_c_7.Create_1("");
  const _4=_c_7.Create_1("");
  const _5=_c_7.Create_1("");
  const _6=_c_7.Create_1(false);
  new _c_11();
  const shufflePrice=(price) => {
    const dt=1;
    const u1=Math.random();
    const u2=Math.random();
    const rand=0+1*(Math.sqrt(-2*Math.log(u1))*Math.cos(2*3.141592653589793*u2));
    return price*Math.exp(0*dt+0.01*Math.sqrt(dt)*rand);
  };
  const exchangeRates=dict([["USD", shufflePrice(1)], ["AED", shufflePrice(3.6725)], ["AFN", shufflePrice(71.873644)], ["ALL", shufflePrice(92.535822)], ["AMD", shufflePrice(387.559192)], ["ANG", shufflePrice(1.79)], ["AOA", shufflePrice(862.398965)], ["ARS", shufflePrice(864.75)], ["AUD", shufflePrice(1.509784)], ["AWG", shufflePrice(1.79)], ["AZN", shufflePrice(1.700932)], ["BAM", shufflePrice(1.803811)], ["BBD", shufflePrice(2)], ["BDT", shufflePrice(117.327239)], ["BGN", shufflePrice(1.803751)], ["BHD", shufflePrice(0.376)], ["BIF", shufflePrice(2861.40373)], ["BMD", shufflePrice(1)], ["BND", shufflePrice(1.350498)], ["BOB", shufflePrice(6.926527)], ["BRL", shufflePrice(5.143915)], ["BSD", shufflePrice(1)], ["BTN", shufflePrice(83.110225)], ["BWP", shufflePrice(13.591326)], ["BYN", shufflePrice(3.258688)], ["BZD", shufflePrice(2)], ["CAD", shufflePrice(1.367405)], ["CDF", shufflePrice(2760.63504)], ["CHF", shufflePrice(0.914572)], ["CLP", shufflePrice(908.83366)], ["CNY", shufflePrice(7.253669)], ["COP", shufflePrice(3832.4374)], ["CRC", shufflePrice(512.59939)], ["CUP", shufflePrice(24)], ["CVE", shufflePrice(101.6945)], ["CZK", shufflePrice(22.787519)], ["DJF", shufflePrice(177.721)], ["DKK", shufflePrice(6.88015)], ["DOP", shufflePrice(58.744236)], ["DZD", shufflePrice(134.61582)], ["EGP", shufflePrice(47.125572)], ["ERN", shufflePrice(15)], ["ETB", shufflePrice(57.501949)], ["EUR", shufflePrice(0.922275)], ["FJD", shufflePrice(2.268878)], ["FKP", shufflePrice(0.785489)], ["FOK", shufflePrice(6.880151)], ["GBP", shufflePrice(0.785489)], ["GEL", shufflePrice(2.729431)], ["GGP", shufflePrice(0.785489)], ["GHS", shufflePrice(14.711111)], ["GIP", shufflePrice(0.785489)], ["GMD", shufflePrice(64.645151)], ["GNF", shufflePrice(8583.4684)], ["GTQ", shufflePrice(7.770211)], ["GYD", shufflePrice(209.3256)], ["HKD", shufflePrice(7.812678)], ["HNL", shufflePrice(24.713353)], ["HRK", shufflePrice(6.948871)], ["HTG", shufflePrice(132.96877)], ["HUF", shufflePrice(355.17333)], ["IDR", shufflePrice(16044.45756)], ["ILS", shufflePrice(3.663675)], ["IMP", shufflePrice(0.785489)], ["INR", shufflePrice(83.110247)], ["IQD", shufflePrice(1311.154332)], ["IRR", shufflePrice(42085.32797)], ["ISK", shufflePrice(138.20881)], ["JEP", shufflePrice(0.785489)], ["JMD", shufflePrice(155.955573)], ["JOD", shufflePrice(0.709)], ["JPY", shufflePrice(157.040611)], ["KES", shufflePrice(131.920052)], ["KGS", shufflePrice(88.100617)], ["KHR", shufflePrice(4086.030115)], ["KID", shufflePrice(1.509781)], ["KMF", shufflePrice(453.7289)], ["KRW", shufflePrice(1365.910473)], ["KWD", shufflePrice(0.307004)], ["KYD", shufflePrice(0.833333)], ["KZT", shufflePrice(443.228278)], ["LAK", shufflePrice(21637.1572)], ["LBP", shufflePrice(89500)], ["LKR", shufflePrice(299.96255)], ["LRD", shufflePrice(193.391951)], ["LSL", shufflePrice(18.405536)], ["LYD", shufflePrice(4.840018)], ["MAD", shufflePrice(9.951317)], ["MDL", shufflePrice(17.716725)], ["MGA", shufflePrice(4428.262128)], ["MKD", shufflePrice(56.689569)], ["MMK", shufflePrice(2101.17502)], ["MNT", shufflePrice(3413.249018)], ["MOP", shufflePrice(8.047058)], ["MRU", shufflePrice(39.919486)], ["MUR", shufflePrice(46.232638)], ["MVR", shufflePrice(15.443748)], ["MWK", shufflePrice(1745.078091)], ["MXN", shufflePrice(16.701898)], ["MYR", shufflePrice(4.714021)], ["MZN", shufflePrice(63.386026)], ["NAD", shufflePrice(18.405536)], ["NGN", shufflePrice(1444.81095)], ["NIO", shufflePrice(36.817669)], ["NOK", shufflePrice(10.587896)], ["NPR", shufflePrice(132.976361)], ["NZD", shufflePrice(1.634515)], ["OMR", shufflePrice(0.384497)], ["PAB", shufflePrice(1)], ["PEN", shufflePrice(3.732947)], ["PGK", shufflePrice(3.85829)], ["PHP", shufflePrice(58.197447)], ["PKR", shufflePrice(278.192827)], ["PLN", shufflePrice(3.928027)], ["PYG", shufflePrice(7499.15795)], ["QAR", shufflePrice(3.64)], ["RON", shufflePrice(4.588111)], ["RSD", shufflePrice(107.95536)], ["RUB", shufflePrice(89.670486)], ["RWF", shufflePrice(1312.422132)], ["SAR", shufflePrice(3.75)], ["SBD", shufflePrice(8.360711)], ["SCR", shufflePrice(14.423239)], ["SDG", shufflePrice(510.928659)], ["SEK", shufflePrice(10.668197)], ["SGD", shufflePrice(1.350499)], ["SHP", shufflePrice(0.785489)], ["SLE", shufflePrice(22.661259)], ["SLL", shufflePrice(22661.259243)], ["SOS", shufflePrice(571.601821)], ["SRD", shufflePrice(32.417134)], ["SSP", shufflePrice(1757.3791)], ["STN", shufflePrice(22.595705)], ["SYP", shufflePrice(12892.985817)], ["SZL", shufflePrice(18.405536)], ["THB", shufflePrice(36.67319)], ["TJS", shufflePrice(10.897007)], ["TMT", shufflePrice(3.500128)], ["TND", shufflePrice(3.120681)], ["TOP", shufflePrice(2.338537)], ["TRY", shufflePrice(32.231538)], ["TTD", shufflePrice(6.764607)], ["TVD", shufflePrice(1.509781)], ["TWD", shufflePrice(32.214867)], ["TZS", shufflePrice(2600.523481)], ["UAH", shufflePrice(40.131242)], ["UGX", shufflePrice(3815.899851)], ["UYU", shufflePrice(38.350548)], ["UZS", shufflePrice(12726.307347)], ["VES", shufflePrice(36.5129)], ["VND", shufflePrice(25483.879592)], ["VUV", shufflePrice(119.851356)], ["WST", shufflePrice(2.73206)], ["XAF", shufflePrice(604.971867)], ["XCD", shufflePrice(2.7)], ["XDR", shufflePrice(0.756618)], ["XOF", shufflePrice(604.971867)], ["XPF", shufflePrice(110.056761)], ["YER", shufflePrice(250.296867)], ["ZAR", shufflePrice(18.405579)], ["ZMW", shufflePrice(26.450294)], ["ZWL", shufflePrice(13.224)]]);
  const R=_5.View;
  const C=_4.View;
  const this_1=new _c_3("New_1");
  const this_2=(this_1.h.push(new _c_19("amount", _1)),this_1);
  const this_3=(this_2.h.push(new _c_18("fromcurrency", _2)),this_2);
  const t=(this_3.h.push(new _c_18("tocurrency", _3)),this_3);
  const t_1=(t.h.push(EventQ2(t.k, "convertaction", () => t.i, () => {
    const _8=null;
    Start(Delay(() => {
      const amount=_1.Get();
      const fromCurrency=_2.Get();
      const toCurrency=_3.Get();
      const _9=null;
      return Bind_1(Delay(() => {
        let o;
        let o_1;
        const _10=(o=0,[exchangeRates.TryGetValue(fromCurrency, {get:() => o, set:(v) => {
          o=v;
        }}), o]);
        const _11=(o_1=0,[exchangeRates.TryGetValue(toCurrency, {get:() => o_1, set:(v) => {
          o_1=v;
        }}), o_1]);
        if(_10[0]&&_11[0]){
          const fromRate=exchangeRates.Item(fromCurrency);
          return Return(Some(amount*(exchangeRates.Item(toCurrency)/fromRate)));
        }
        else return Return(null);
      }), (a) => a==null?(_4.Set("Conversion failed."),Zero()):(_4.Set(amount.toFixed(2)+" "+toSafe(fromCurrency)+" = "+a.$0.toFixed(2)+" "+toSafe(toCurrency)),Zero()));
    }), null);
  })),t);
  const this_4=(t_1.h.push(EventQ2(t_1.k, "displayratesaction", () => t_1.i, () => {
    if(_6.Get()){
      _5.Set("");
      _6.Set(false);
    }
    else {
      const rates=concat_1("\n", map((kvp) => toSafe(kvp.K)+" : "+kvp.V.toFixed(4), exchangeRates));
      _5.Update(() => rates);
      _6.Set(true);
    }
  })),t_1);
  const this_5=(this_4.h.push(new _c_15("conversion", C)),this_4);
  const b=(this_5.h.push(new _c_15("rates", R)),this_5);
  const p=CompleteHoles(b.k, b.h, [["amount", 1, null], ["fromcurrency", 0, null], ["tocurrency", 0, null]]);
  const i=new _c_8(p[1], currencyconverter(p[0]));
  let _7=(b.i=i,i);
  return _7.Doc;
}
function HomePage(){
  const b=new _c_3("New_1");
  const p=CompleteHoles(b.k, b.h, []);
  const i=new _c_8(p[1], homep(p[0]));
  let _1=(b.i=i,i);
  return _1.Doc;
}
function JSUnion(t, cases){
  const createCase=(tag, fieldValues) => {
    const o=t==null?{}:new t();
    const m=get(cases, tag);
    const _1=m[0];
    return _1!=null&&_1.$==1?m[0].$0:(o.$=tag,iteri((_2, _3) => {
      o["$"+String(_2)]=_3;
    }, fieldValues),o);
  };
  const parseCases=ofSeq_1(collect((_1) => {
    const i=_1[0];
    const a=_1[1];
    const fields=a[2];
    return map((_2) =>[i, _2[0], _2[1], fields], a[1]);
  }, indexed(cases)));
  return New((path) => collect((_1) => {
    const i=_1[0];
    if(isCorrectMethod(_1[1], path.Method)){
      const m=startsWith(ofArray(_1[2]), path.Segments);
      if(m==null)return[];
      else {
        const p=m.$0;
        const m_1=ofArray(_1[3]);
        if(m_1.$==0)return[[_c_6.New(p, path.QueryArgs, path.FormData, path.Method, path.Body), createCase(i, [])]];
        else {
          function collect_1(fields){
            return(path_1) =>(acc) => {
              if(fields.$==1){
                const t_1=fields.$1;
                return collect((_2) =>((collect_1(t_1))(_2[0]))(_c_13.Cons(_2[1], acc)), fields.$0.Parse(path_1));
              }
              else return[[path_1, createCase(i, ofList(rev_1(acc)))]];
            };
          }
          return((collect_1(m_1))(_c_6.New(p, path.QueryArgs, path.FormData, path.Method, path.Body)))(_c_13.Empty);
        }
      }
    }
    else return[];
  }, parseCases), (value) => {
    const constIndex=tryFindIndex((_1) => {
      const _2=_1[0];
      return _2!=null&&_2.$==1&&Equals(value, _2.$0);
    }, cases);
    const tag=constIndex!=null&&constIndex.$==1?constIndex.$0:value.$;
    const p=get(cases, tag);
    const fields=p[2];
    const p_1=get(p[1], 0);
    const casePath=[_c_6.Segment(ofArray(p_1[1]), p_1[0])];
    if(fields.length==0)return Some(casePath);
    else {
      const fieldParts=map2_1((_1, _2) => _2.Write(_1), init_1(length((get(cases, tag))[2]), (i) => value["$"+String(i)]), fields);
      return forall_2((o) => o!=null, fieldParts)?Some(append(casePath, collect((o) => o.$0, fieldParts))):null;
    }
  });
}
function isCorrectMethod(m, p){
  return p!=null&&p.$==1?m!=null&&m.$==1?Equals(p.$0, m.$0):true:!(m!=null&&m.$==1);
}
function Parse(router_1, path){
  return tryPick((_1) => _1[0].Segments.$==0?Some(_1[1]):null, router_1.Parse(path));
}
function HashLink(router_1, endpoint){
  return"#"+Link(router_1, endpoint);
}
function Link(router_1, endpoint){
  const m=Write(router_1, endpoint);
  return m==null?"":m.$0.ToLink();
}
function Write(router_1, endpoint){
  const o=router_1.Write(endpoint);
  return o==null?null:Some(_c_6.Combine(o.$0));
}
let _c_6=Lazy((_i) => class Route {
  static {
    _c_6=_i(this);
  }
  Segments;
  QueryArgs;
  FormData;
  Method;
  Body;
  static FromHash(path, strict){
    const m=path.indexOf("#");
    if(m===-1)return _c_6.Empty;
    else {
      const h=path.substring(m+1);
      return strict!=null&&strict.$0?h==""||h=="/"?_c_6.Empty:StartsWith(h, "/")?_c_6.FromUrl(h.substring(1), Some(true)):_c_6.Segment_2(h):_c_6.FromUrl(path.substring(m), Some(false));
    }
  }
  static Segment(s, m){
    return _c_6.New(s, _c_6.Empty.QueryArgs, _c_6.Empty.FormData, m, _c_6.Empty.Body);
  }
  static get Empty(){
    return _c_6.New(_c_13.Empty, new _c_21("New", []), new _c_21("New", []), null, Some(null));
  }
  static FromUrl(path, strict){
    const m=path.indexOf("?");
    const p=m===-1?[path, new _c_21("New", [])]:[Substring(path, 0, m), _c_6.ParseQuery(path.substring(m+1))];
    return _c_6.New(ofArray(SplitChars(p[0], ["/"], strict!=null&&strict.$0?0:1)), p[1], _c_6.Empty.FormData, _c_6.Empty.Method, _c_6.Empty.Body);
  }
  static Segment_2(s){
    return _c_6.New(ofArray([s]), _c_6.Empty.QueryArgs, _c_6.Empty.FormData, _c_6.Empty.Method, _c_6.Empty.Body);
  }
  static ParseQuery(q){
    return OfArray(ofSeq_1(choose((kv) => {
      const m=SplitChars(kv, ["="], 0);
      return!Equals(m, null)&&m.length===2?Some([get(m, 0), get(m, 1)]):((((_1) =>(_2) => _1("wrong format for query argument: "+toSafe(_2)))((s) => {
        console.log(s);
      }))(kv),null);
    }, SplitChars(q, ["&"], 0))));
  }
  ToLink(){
    return WriteLink(this.Segments, this.QueryArgs);
  }
  static Combine(paths){
    let method;
    let body;
    let queryArgs;
    let formData;
    const paths_1=ofSeq_1(paths);
    const m=length(paths_1);
    if(m===0)return _c_6.Empty;
    else if(m===1)return get(paths_1, 0);
    else {
      method=null;
      body=null;
      const segments=[];
      queryArgs=new _c_21("New", []);
      formData=new _c_21("New", []);
      iter_2((p) => {
        const m_1=p.Method;
        if(m_1!=null&&m_1.$==1)method=m_1;
        const m_2=p.Body;
        if(m_2==null){ }
        else body=m_2;
        queryArgs=FoldBack((_1, _2, _3) => _3.Add_1(_1, _2), queryArgs, p.QueryArgs);
        formData=FoldBack((_1, _2, _3) => _3.Add_1(_1, _2), formData, p.FormData);
        iter_1((a) => {
          segments.push(a);
        }, p.Segments);
      }, paths_1);
      return _c_6.New(ofSeq(segments), queryArgs, formData, method, body);
    }
  }
  static New(Segments, QueryArgs, FormData, Method, Body){
    return Create_1(_c_6, {
      Segments:Segments, 
      QueryArgs:QueryArgs, 
      FormData:FormData, 
      Method:Method, 
      Body:Body
    });
  }
});
function Some(Value_1){
  return{$:1, $0:Value_1};
}
let _c_7=Lazy((_i) => class Var extends _c_1 {
  static {
    _c_7=_i(this);
  }
  static Create_1(v){
    return new _c_14(false, {s:Ready(v, [])}, v);
  }
  static { }
});
let _c_8=Lazy((_i) => class TemplateInstance extends _c_1 {
  static {
    _c_8=_i(this);
  }
  doc;
  allVars;
  anchorRoot;
  get Doc(){
    return this.doc;
  }
  SetAnchorRoot(el){
    this.anchorRoot=el;
  }
  constructor(c, doc){
    super();
    this.doc=doc;
    this.allVars=c.$==0?c.$0:FailWith("Should not happen");
    this.anchorRoot=null;
  }
});
let _c_9=Lazy((_i) => {
  Force(_c_4);
  return class Elt extends _c_4 {
    static {
      _c_9=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    get Value(){
      return this.fillWith;
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_10=Lazy((_i) => {
  Force(_c_4);
  return class Text extends _c_4 {
    static {
      _c_10=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    get Value(){
      return this.fillWith;
    }
    get AsChoiceView(){
      return Choice1Of2(this.fillWith);
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
function Equals(a, b){
  if(a===b)return true;
  else {
    const m=typeof a;
    if(m=="object"){
      if(a===null||a===void 0||b===null||b===void 0||!Equals(typeof b, "object"))return false;
      else if("Equals"in a)return a.Equals(b);
      else if("Equals"in b)return false;
      else if(a instanceof Array&&b instanceof Array)return arrayEquals(a, b);
      else if(a instanceof Date&&b instanceof Date)return dateEquals(a, b);
      else {
        const eqR=[true];
        let k;
        for(var k_2 in a)if(((k_3) => {
          eqR[0]=!a.hasOwnProperty(k_3)||b.hasOwnProperty(k_3)&&Equals(a[k_3], b[k_3]);
          return!eqR[0];
        })(k_2))break;
        if(eqR[0]){
          let k_1;
          for(var k_3 in b)if(((k_4) => {
            eqR[0]=!b.hasOwnProperty(k_4)||a.hasOwnProperty(k_4);
            return!eqR[0];
          })(k_3))break;
        }
        return eqR[0];
      }
    }
    else return m=="function"&&("$Func"in a?a.$Func===b.$Func&&a.$Target===b.$Target:"$Invokes"in a&&"$Invokes"in b&&arrayEquals(a.$Invokes, b.$Invokes));
  }
}
function arrayEquals(a, b){
  let eq;
  let i;
  if(length(a)===length(b)){
    eq=true;
    i=0;
    while(eq&&i<length(a))
      {
        !Equals(get(a, i), get(b, i))?eq=false:void 0;
        i=i+1;
      }
    return eq;
  }
  else return false;
}
function dateEquals(a, b){
  return a.getTime()===b.getTime();
}
function Hash(o){
  const m=typeof o;
  return m=="function"?0:m=="boolean"?o?1:0:m=="number"?o:m=="string"?hashString(o):m=="object"?o==null?0:o instanceof Array?hashArray(o):hashObject(o):0;
}
function hashString(s){
  let hash;
  if(s===null)return 0;
  else {
    hash=5381;
    for(let i=0, _1=s.length-1;i<=_1;i++)hash=hashMix(hash, s[i].charCodeAt());
    return hash;
  }
}
function hashArray(o){
  let h=-34948909;
  for(let i=0, _1=length(o)-1;i<=_1;i++)h=hashMix(h, Hash(get(o, i)));
  return h;
}
function hashObject(o){
  if("GetHashCode"in o)return o.GetHashCode();
  else {
    const h=[0];
    let k;
    for(var k_1 in o)if(((key) => {
      h[0]=hashMix(hashMix(h[0], hashString(key)), Hash(o[key]));
      return false;
    })(k_1))break;
    return h[0];
  }
}
function hashMix(x, y){
  return(x<<5)+x+y;
}
function Compare(a, b){
  if(a===b)return 0;
  else {
    const m=typeof a;
    switch(m=="function"?1:m=="boolean"?2:m=="number"?2:m=="string"?2:m=="object"?3:0){
      case 0:
        return typeof b=="undefined"?0:-1;
      case 1:
        return FailWith("Cannot compare function values.");
      case 2:
        return a<b?-1:1;
      case 3:
        if(a===null)return -1;
        else if(b===null)return 1;
        else if("CompareTo"in a)return a.CompareTo(b);
        else if("CompareTo0"in a)return a.CompareTo0(b);
        else if(a instanceof Array&&b instanceof Array)return compareArrays(a, b);
        else if(a instanceof Date&&b instanceof Date)return compareDates(a, b);
        else {
          const cmp=[0];
          let k;
          for(var k_2 in a)if(((k_3) =>!a.hasOwnProperty(k_3)?false:!b.hasOwnProperty(k_3)?(cmp[0]=1,true):(cmp[0]=Compare(a[k_3], b[k_3]),cmp[0]!==0))(k_2))break;
          if(cmp[0]===0){
            let k_1;
            for(var k_3 in b)if(((k_4) =>!b.hasOwnProperty(k_4)?false:!a.hasOwnProperty(k_4)&&(cmp[0]=-1,true))(k_3))break;
          }
          return cmp[0];
        }
        break;
    }
  }
}
function compareArrays(a, b){
  let cmp;
  let i;
  if(length(a)<length(b))return -1;
  else if(length(a)>length(b))return 1;
  else {
    cmp=0;
    i=0;
    while(cmp===0&&i<length(a))
      {
        cmp=Compare(get(a, i), get(b, i));
        i=i+1;
      }
    return cmp;
  }
}
function compareDates(a, b){
  return Compare(a.getTime(), b.getTime());
}
function NewGuid(){
  return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]", "g"), (c) => {
    const r=Math.random()*16|0;
    const v=c=="x"?r:r&3|8;
    return v.toString(16);
  });
}
function Map(fn, a){
  return CreateLazy(() => Map_1(fn, a()));
}
function Sink(act, a){
  function loop(){
    WhenRun(a(), act, () => {
      scheduler().Fork(loop);
    });
  }
  scheduler().Fork(loop);
}
function CreateLazy(observe){
  const lv={c:null, o:observe};
  return() => {
    let c=lv.c;
    if(c===null){
      c=lv.o();
      lv.c=c;
      const _1=c.s;
      if(_1!=null&&_1.$==0)lv.o=null;
      else WhenObsoleteRun(c, () => {
        lv.c=null;
      });
      return c;
    }
    else return c;
  };
}
function Bind(fn, view){
  return Join(Map(fn, view));
}
function Join(a){
  return CreateLazy(() => Join_2(a()));
}
function Const(x){
  const o={s:Forever(x)};
  return() => o;
}
function Map3(fn, a, a_1, a_2){
  return CreateLazy(() => Map3_1(fn, a(), a_1(), a_2()));
}
function Sequence(views){
  return CreateLazy(() => Sequence_1(map((a) => a(), views)));
}
function Map2(fn, a, a_1){
  return CreateLazy(() => Map2_1(fn, a(), a_1()));
}
function Map2Unit(a, a_1){
  return CreateLazy(() => Map2Unit_1(a(), a_1()));
}
let _c_11=Lazy((_i) => class Random extends _c_1 {
  static {
    _c_11=_i(this);
  }
  Next(minValue, maxValue){
    return minValue>maxValue?FailWith("'minValue' cannot be greater than maxValue."):minValue+Math.floor(Math.random()*(maxValue-minValue));
  }
});
function EventQ2(_1, holeName, ti, f){
  return new _c_17(holeName, (el) =>(ev) => {
    const i=ti();
    i.SetAnchorRoot(el);
    return f({
      Vars:i, 
      Anchors:i, 
      Target:el, 
      Event:ev
    });
  });
}
function CompleteHoles(key, filledHoles, vars){
  const allVars=new _c_22("New_5");
  const filledVars=new _c_23("New_3");
  const e=Get(filledHoles);
  try {
    while(e.MoveNext())
      {
        const h=e.Current;
        const n=h.Name;
        filledVars.SAdd(n);
        allVars.set_Item(n, h);
      }
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
  return[append(filledHoles, choose((_1) => {
    const name=_1[0];
    const ty=_1[1];
    const d=_1[2];
    if(filledVars.Contains(name))return null;
    else {
      const r=ty===0?_c_24.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _2=_c_7.Create_1(o==null?"":o.$0);
        return new _c_18(name, _2);
      }):ty===1?_c_24.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _2=_c_7.Create_1(o==null?0:o.$0);
        return new _c_19(name, _2);
      }):ty===2?_c_24.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _2=_c_7.Create_1(o==null?false:o.$0);
        return new _c_25(name, _2);
      }):ty===3?_c_24.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _2=_c_7.Create_1(o==null?-8640000000000000:o.$0);
        return new _c_26(name, _2);
      }):ty===4?_c_24.GetOrAddHoleFor(key, name, () => new _c_27(name, _c_7.Create_1([]))):ty===5?_c_24.GetOrAddHoleFor(key, name, () => new _c_28(name, _c_7.Create_1(Some(globalThis.document.querySelector("[ws-dom="+name+"]"))))):ty===6?_c_24.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _2=_c_7.Create_1(o==null?[]:o.$0);
        return new _c_29(name, _2);
      }):FailWith("Invalid value type");
      allVars.set_Item(name, r);
      return Some(r);
    }
  }, vars)), {$:0, $0:allVars}];
}
function dict(s){
  const d=new _c_22("New_5");
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        d.DAdd(f[0], f[1]);
      }
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
  return d;
}
function map(f, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new _c_20(null, null, (e) => en.MoveNext()&&(e.c=f(en.Current),true), () => {
      en.Dispose();
    });
  }};
}
function iteri(p, s){
  let i=0;
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        p(i, e.Current);
        i=i+1;
      }
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function collect(f, s){
  return concat(map(f, s));
}
function append(s1, s2){
  return{GetEnumerator:() => {
    const e1=Get(s1);
    const first=[true];
    return new _c_20(e1, null, (x) => {
      if(x.s.MoveNext()){
        x.c=x.s.Current;
        return true;
      }
      else {
        const x_1=x.s;
        if(!Equals(x_1, null))x_1.Dispose();
        x.s=null;
        return first[0]&&(first[0]=false,x.s=Get(s2),x.s.MoveNext()?(x.c=x.s.Current,true):(x.s.Dispose(),x.s=null,false));
      }
    }, (x) => {
      const x_1=x.s;
      if(!Equals(x_1, null))x_1.Dispose();
    });
  }};
}
function indexed(s){
  return mapi((_1, _2) =>[_1, _2], s);
}
function tryFindIndex(ok, s){
  const e=Get(s);
  try {
    let loop=true;
    let i=0;
    while(loop&&e.MoveNext())
      if(ok(e.Current))loop=false;
      else i=i+1;
    return loop?null:Some(i);
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function tryPick(f, s){
  const e=Get(s);
  try {
    let r=null;
    while(Equals(r, null)&&e.MoveNext())
      r=f(e.Current);
    return r;
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function concat(ss){
  return{GetEnumerator:() => {
    const outerE=Get(ss);
    function next(st){
      while(true)
        {
          const m=st.s;
          if(Equals(m, null)){
            if(outerE.MoveNext()){
              st.s=Get(outerE.Current);
              st=st;
            }
            else {
              outerE.Dispose();
              return false;
            }
          }
          else if(m.MoveNext()){
            st.c=m.Current;
            return true;
          }
          else {
            st.Dispose();
            st.s=null;
            st=st;
          }
        }
    }
    return new _c_20(null, null, next, (st) => {
      const x=st.s;
      if(!Equals(x, null))x.Dispose();
      if(!Equals(outerE, null))outerE.Dispose();
    });
  }};
}
function mapi(f, s){
  return map2(f, initInfinite((x) => x), s);
}
function map2(f, s1, s2){
  return{GetEnumerator:() => {
    const e1=Get(s1);
    const e2=Get(s2);
    return new _c_20(null, null, (e) => e1.MoveNext()&&e2.MoveNext()&&(e.c=f(e1.Current, e2.Current),true), () => {
      e1.Dispose();
      e2.Dispose();
    });
  }};
}
function initInfinite(f){
  return{GetEnumerator:() => new _c_20(0, null, (e) => {
    e.c=f(e.s);
    e.s=e.s+1;
    return true;
  }, void 0)};
}
function head(s){
  const e=Get(s);
  try {
    return e.MoveNext()?e.Current:insufficient();
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function forall2(p, s1, s2){
  return!exists2((_1, _2) =>!p(_1, _2), s1, s2);
}
function rev(s){
  return delay(() => ofSeq_1(s).slice().reverse());
}
function distinctBy(f, s){
  return{GetEnumerator:() => {
    const o=Get(s);
    const seen=new _c_23("New_3");
    return new _c_20(null, null, (e) => {
      let cur;
      let has;
      if(o.MoveNext()){
        cur=o.Current;
        has=seen.SAdd(f(cur));
        while(!has&&o.MoveNext())
          {
            cur=o.Current;
            has=seen.SAdd(f(cur));
          }
        return has&&(e.c=cur,true);
      }
      else return false;
    }, () => {
      o.Dispose();
    });
  }};
}
function fold(f, x, s){
  let r=x;
  const e=Get(s);
  try {
    while(e.MoveNext())
      r=f(r, e.Current);
    return r;
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function exists2(p, s1, s2){
  const e1=Get(s1);
  try {
    const e2=Get(s2);
    try {
      let r=false;
      while(!r&&e1.MoveNext()&&e2.MoveNext())
        r=p(e1.Current, e2.Current);
      return r;
    }
    finally {
      if(typeof e2=="object"&&isIDisposable(e2))e2.Dispose();
    }
  }
  finally {
    if(typeof e1=="object"&&isIDisposable(e1))e1.Dispose();
  }
}
function delay(f){
  return{GetEnumerator:() => Get(f())};
}
function distinct(s){
  return distinctBy((x) => x, s);
}
function iter(p, s){
  const e=Get(s);
  try {
    while(e.MoveNext())
      p(e.Current);
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function unfold(f, s){
  return{GetEnumerator:() => new _c_20(s, null, (e) => {
    const m=f(e.s);
    return m==null?false:(e.c=m.$0[0],e.s=m.$0[1],true);
  }, void 0)};
}
function max(s){
  const e=Get(s);
  try {
    if(!e.MoveNext())seqEmpty();
    let m=e.Current;
    while(e.MoveNext())
      {
        const x=e.Current;
        if(Compare(x, m)===1)m=x;
      }
    return m;
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function init(n, f){
  return take(n, initInfinite(f));
}
function seqEmpty(){
  return FailWith("The input sequence was empty.");
}
function compareWith(f, s1, s2){
  const e1=Get(s1);
  try {
    const e2=Get(s2);
    try {
      let r=0;
      let loop=true;
      while(loop&&r===0)
        if(e1.MoveNext())r=e2.MoveNext()?f(e1.Current, e2.Current):1;
        else if(e2.MoveNext())r=-1;
        else loop=false;
      return r;
    }
    finally {
      if(typeof e2=="object"&&isIDisposable(e2))e2.Dispose();
    }
  }
  finally {
    if(typeof e1=="object"&&isIDisposable(e1))e1.Dispose();
  }
}
function take(n, s){
  n<0?nonNegative():void 0;
  return{GetEnumerator:() => {
    const e=[Get(s)];
    return new _c_20(0, null, (o) => {
      o.s=o.s+1;
      if(o.s>n)return false;
      else {
        const en=e[0];
        return Equals(en, null)?insufficient():en.MoveNext()?(o.c=en.Current,o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,insufficient());
      }
    }, () => {
      const x=e[0];
      if(!Equals(x, null))x.Dispose();
    });
  }};
}
function forall(p, s){
  return!exists((x) =>!p(x), s);
}
function exists(p, s){
  const e=Get(s);
  try {
    let r=false;
    while(!r&&e.MoveNext())
      r=p(e.Current);
    return r;
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function toSafe(s){
  return s==null?"":s;
}
function concat_1(separator, strings){
  return ofSeq_1(strings).join(separator);
}
function StartsWith(t, s){
  return t.substring(0, s.length)==s;
}
function Substring(s, ix, ct){
  return s.substr(ix, ct);
}
function SplitChars(s, sep, opts){
  return Split(s, new RegExp("["+RegexEscape(sep.join(""))+"]"), opts);
}
function Split(s, pat, opts){
  return opts===1?filter((x) => x!=="", SplitWith(s, pat)):SplitWith(s, pat);
}
function RegexEscape(s){
  return s.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]", "g"), "\\$&");
}
function SplitWith(str, pat){
  return str.split(pat);
}
function IsNullOrEmpty(x){
  return x==null||x=="";
}
function Join_1(sep, values){
  return values.join(sep);
}
function forall_1(f, s){
  return forall(f, protect(s));
}
function protect(s){
  return s==null?"":s;
}
function NewFromSeq(fields){
  const r={};
  const e=Get(fields);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        r[f[0]]=f[1];
      }
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
  return r;
}
let _c_12=Lazy((_i) => class Doc extends _c_1 {
  static {
    _c_12=_i(this);
  }
  docNode;
  updates;
  static EmbedView(view){
    const node=CreateEmbedNode();
    return _c_12.Mk(EmbedDoc(node), Map(() => { }, Bind((doc) => {
      UpdateEmbedNode(node, doc.docNode);
      return doc.updates;
    }, view)));
  }
  static Mk(node, updates){
    return new Doc(node, updates);
  }
  static RunInPlace(childrenOnly, parent, doc){
    const st=CreateRunState(parent, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(childrenOnly, st, doc.docNode)):() => {
      PerformSyncUpdate(childrenOnly, st, doc.docNode);
    }, doc.updates);
  }
  static get Empty(){
    return _c_12.Mk(null, Const());
  }
  static TextNode(v){
    return _c_12.Mk(TextNodeDoc(globalThis.document.createTextNode(v)), Const());
  }
  static TextView(txt){
    const node=CreateTextNode();
    return _c_12.Mk(TextDoc(node), Map((t) => {
      UpdateTextNode(node, t);
    }, txt));
  }
  constructor(docNode, updates){
    super();
    this.docNode=docNode;
    this.updates=updates;
  }
});
function GetFieldValues(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push(o[k_1]);
  return r;
}
function startsWith(s, l){
  let _1;
  switch(s.$==1?l.$==1?Equals(s.$0, l.$0)?(_1=[l.$0, l.$1, s.$0, s.$1],1):2:2:0){
    case 0:
      return Some(l);
    case 1:
      return startsWith(_1[3], _1[1]);
    case 2:
      return null;
  }
}
function ofArray(arr){
  let r=_c_13.Empty;
  for(let i=length(arr)-1, _1=0;i>=_1;i--)r=_c_13.Cons(get(arr, i), r);
  return r;
}
function rev_1(l){
  let res=_c_13.Empty;
  let r=l;
  while(r.$==1)
    {
      res=_c_13.Cons(r.$0, res);
      r=r.$1;
    }
  return res;
}
function head_1(l){
  return l.$==1?l.$0:listEmpty();
}
function tail(l){
  return l.$==1?l.$1:listEmpty();
}
function listEmpty(){
  return FailWith("The input list was empty.");
}
function iter_1(f, l){
  let r=l;
  while(r.$==1)
    {
      f(head_1(r));
      r=tail(r);
    }
}
function ofSeq(s){
  if(s instanceof _c_13)return s;
  else if(s instanceof Array)return ofArray(s);
  else {
    const e=Get(s);
    try {
      let r;
      let go=e.MoveNext();
      if(!go)return _c_13.Empty;
      else {
        const res=Create_1(_c_13, {$:1});
        r=res;
        while(go)
          {
            r.$0=e.Current;
            if(e.MoveNext()){
              const t=Create_1(_c_13, {$:1});
              r=(r.$1=t,t);
            }
            else go=false;
          }
        r.$1=_c_13.Empty;
        return res;
      }
    }
    finally {
      if(typeof e=="object"&&isIDisposable(e))e.Dispose();
    }
  }
}
let _c_13=Lazy((_i) => class FSharpList {
  static {
    _c_13=_i(this);
  }
  static Cons(Head, Tail){
    return Create_1(FSharpList, {
      $:1, 
      $0:Head, 
      $1:Tail
    });
  }
  static Empty=Create_1(_c_13, {$:0});
  GetEnumerator(){
    return new _c_20(this, null, (e) => {
      const m=e.s;
      return m.$==0?false:(e.c=m.$0,e.s=m.$1,true);
    }, void 0);
  }
});
function ofList(xs){
  const q=[];
  let l=xs;
  while(!(l.$==0))
    {
      q.push(head_1(l));
      l=tail(l);
    }
  return q;
}
function map2_1(f, arr1, arr2){
  checkLength(arr1, arr2);
  const r=new Array(arr2.length);
  for(let i=0, _1=arr2.length-1;i<=_1;i++)r[i]=f(arr1[i], arr2[i]);
  return r;
}
function forall_2(f, x){
  let a=true;
  let i=0;
  while(a&&i<length(x))
    if(f(x[i]))i=i+1;
    else a=false;
  return a;
}
function ofSeq_1(xs){
  if(xs instanceof Array)return xs.slice();
  else if(xs instanceof _c_13)return ofList(xs);
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      if(typeof o=="object"&&isIDisposable(o))o.Dispose();
    }
  }
}
function init_1(size, f){
  if(size<0)FailWith("Negative size given.");
  else null;
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=f(i);
  return r;
}
function checkLength(arr1, arr2){
  if(arr1.length!==arr2.length)FailWith("The arrays have different lengths.");
}
function choose(f, arr){
  const q=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++){
    const m=f(arr[i]);
    if(m==null){ }
    else q.push(m.$0);
  }
  return q;
}
function tryFindIndex_1(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      f(arr[i])?res=Some(i):void 0;
      i=i+1;
    }
  return res;
}
function tryPick_1(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      const m=f(arr[i]);
      if(m!=null&&m.$==1)res=m;
      i=i+1;
    }
  return res;
}
function exists_1(f, x){
  let e=false;
  let i=0;
  while(!e&&i<length(x))
    if(f(x[i]))e=true;
    else i=i+1;
  return e;
}
function concat_2(xs){
  return Array.prototype.concat.apply([], ofSeq_1(xs));
}
function sortInPlace(arr){
  mapInPlace((t) => t[0], mapiInPlace((_1, _2) =>[_2, _1], arr).sort(Compare));
}
function filter(f, arr){
  const r=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
function iter_2(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)f(arr[i]);
}
function map_1(f, arr){
  const r=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)r[i]=f(arr[i]);
  return r;
}
function foldBack(f, arr, zero){
  let acc=zero;
  const len=arr.length;
  for(let i=1, _1=len;i<=_1;i++)acc=f(arr[len-i], acc);
  return acc;
}
function pick(f, arr){
  const m=tryPick_1(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function create(size, value){
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=value;
  return r;
}
function ofObj(o){
  return o==null?null:Some(o);
}
let _c_14=Lazy((_i) => {
  Force(_c_2);
  return class ConcreteVar extends _c_2 {
    static {
      _c_14=_i(this);
    }
    isConst;
    current;
    snap;
    view;
    id;
    get View(){
      return this.view;
    }
    Set(v){
      if(this.isConst)(((_1) => _1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
        console.log(s);
      }));
      else {
        Obsolete(this.snap);
        this.current=v;
        this.snap={s:Ready(v, [])};
      }
    }
    Update(f){
      this.Set(f(this.Get()));
    }
    Get(){
      return this.current;
    }
    SetFinal(v){
      if(this.isConst)(((_1) => _1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
        console.log(s);
      }));
      else {
        Obsolete(this.snap);
        this.isConst=true;
        this.current=v;
        this.snap={s:Forever(v)};
      }
    }
    UpdateMaybe(f){
      const m=f(this.Get());
      if(m!=null&&m.$==1)this.Set(m.$0);
    }
    constructor(isConst, initSnap, initValue){
      super();
      this.isConst=isConst;
      this.current=initValue;
      this.snap=initSnap;
      this.view=() => this.snap;
      this.id=Int();
    }
  };
});
function Map_1(fn, sn){
  const m=sn.s;
  if(m!=null&&m.$==0)return{s:Forever(fn(m.$0))};
  else {
    const res={s:Waiting([], [])};
    When(sn, (a) => {
      MarkDone(res, sn, fn(a));
    }, res);
    return res;
  }
}
function WhenRun(snap, avail, obs){
  const m=snap.s;
  if(m==null)obs();
  else m!=null&&m.$==2?(m.$1.push(obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),m.$1.push(obs)):avail(m.$0);
}
function WhenObsoleteRun(snap, obs){
  const m=snap.s;
  if(m==null)obs();
  else m!=null&&m.$==2?m.$1.push(obs):m!=null&&m.$==3?m.$1.push(obs):void 0;
}
function When(snap, avail, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else m!=null&&m.$==2?(EnqueueSafe(m.$1, obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),EnqueueSafe(m.$1, obs)):avail(m.$0);
}
function MarkDone(res, sn, v){
  const _1=sn.s;
  if(_1!=null&&_1.$==0)MarkForever(res, v);
  else MarkReady(res, v);
}
function EnqueueSafe(q, x){
  q.push(x);
  if(q.length%20===0){
    const qcopy=q.slice(0);
    Clear(q);
    for(let i=0, _1=length(qcopy)-1;i<=_1;i++){
      const o=get(qcopy, i);
      if(typeof o=="object")(((sn) => {
        if(sn.s)q.push(sn);
      })(o));
      else(((f) => {
        q.push(f);
      })(o));
    }
  }
  else void 0;
}
function MarkForever(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    sn.s=Forever(v);
    const qa=m.$0;
    for(let i=0, _1=length(qa)-1;i<=_1;i++)(get(qa, i))(v);
  }
  else void 0;
}
function MarkReady(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    sn.s=Ready(v, m.$1);
    const qa=m.$0;
    for(let i=0, _1=length(qa)-1;i<=_1;i++)(get(qa, i))(v);
  }
  else void 0;
}
function Join_2(snap){
  const res={s:Waiting([], [])};
  When(snap, (x) => {
    const y=x();
    When(y, (v) => {
      let _1;
      const _2=y.s;
      if(_2!=null&&_2.$==0){
        const _3=snap.s;
        _1=_3!=null&&_3.$==0;
      }
      else _1=false;
      if(_1)MarkForever(res, v);
      else MarkReady(res, v);
    }, res);
  }, res);
  return res;
}
function Map3_1(fn, sn1, sn2, sn3){
  const _1=sn1.s;
  const _2=sn2.s;
  const _3=sn3.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?_3!=null&&_3.$==0?{s:Forever(fn(_1.$0, _2.$0, _3.$0))}:Map3Opt1(fn, _1.$0, _2.$0, sn3):_3!=null&&_3.$==0?Map3Opt2(fn, _1.$0, _3.$0, sn2):Map3Opt3(fn, _1.$0, sn2, sn3);
  else if(_2!=null&&_2.$==0)return _3!=null&&_3.$==0?Map3Opt4(fn, _2.$0, _3.$0, sn1):Map3Opt5(fn, _2.$0, sn1, sn3);
  else if(_3!=null&&_3.$==0)return Map3Opt6(fn, _3.$0, sn1, sn2);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _4=ValueAndForever(sn1);
        const _5=ValueAndForever(sn2);
        const _6=ValueAndForever(sn3);
        if(_4!=null&&_4.$==1)if(_5!=null&&_5.$==1)if(_6!=null&&_6.$==1)if(_4.$0[1]&&_5.$0[1]&&_6.$0[1])MarkForever(res, fn(_4.$0[0], _5.$0[0], _6.$0[0]));
        else MarkReady(res, fn(_4.$0[0], _5.$0[0], _6.$0[0]));
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    When(sn3, cont, res);
    return res;
  }
}
function Sequence_1(snaps){
  const snaps_1=ofSeq_1(snaps);
  if(snaps_1.length==0)return{s:Forever([])};
  else {
    const res={s:Waiting([], [])};
    const w=[length(snaps_1)-1];
    const cont=() => {
      if(w[0]===0){
        const vs=map_1((s) => {
          const m=s.s;
          return m!=null&&m.$==0?m.$0:m!=null&&m.$==2?m.$0:FailWith("value not found by View.Sequence");
        }, snaps_1);
        if(forall_2((_1) => {
          const _2=_1.s;
          return _2!=null&&_2.$==0;
        }, snaps_1))MarkForever(res, vs);
        else MarkReady(res, vs);
      }
      else w[0]=w[0]-1;
    };
    iter_2((s) => {
      When(s, cont, res);
    }, snaps_1);
    return res;
  }
}
function Map2_1(fn, sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(fn(_1.$0, _2.$0))}:Map2Opt1(fn, _1.$0, sn2);
  else if(_2!=null&&_2.$==0)return Map2Opt2(fn, _2.$0, sn1);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, fn(_3.$0[0], _4.$0[0]));
        else MarkReady(res, fn(_3.$0[0], _4.$0[0]));
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
function Map2Unit_1(sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(null)}:sn2;
  else if(_2!=null&&_2.$==0)return sn1;
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, null);
        else MarkReady(res, null);
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
function Copy(sn){
  const m=sn.s;
  if(m==null)return sn;
  else if(m!=null&&m.$==2){
    const res={s:Ready(m.$0, [])};
    WhenObsolete(sn, res);
    return res;
  }
  else if(m!=null&&m.$==3){
    const res_1={s:Waiting([], [])};
    When(sn, (v) => {
      MarkDone(res_1, sn, v);
    }, res_1);
    return res_1;
  }
  else return sn;
}
function Map3Opt1(fn, x, y, sn3){
  return Map_1((z) => fn(x, y, z), sn3);
}
function Map3Opt2(fn, x, z, sn2){
  return Map_1((y) => fn(x, y, z), sn2);
}
function Map3Opt3(fn, x, sn2, sn3){
  return Map2_1((_1, _2) => fn(x, _1, _2), sn2, sn3);
}
function Map3Opt4(fn, y, z, sn1){
  return Map_1((x) => fn(x, y, z), sn1);
}
function Map3Opt5(fn, y, sn1, sn3){
  return Map2_1((_1, _2) => fn(_1, y, _2), sn1, sn3);
}
function Map3Opt6(fn, z, sn1, sn2){
  return Map2_1((_1, _2) => fn(_1, _2, z), sn1, sn2);
}
function ValueAndForever(snap){
  const m=snap.s;
  return m!=null&&m.$==0?Some([m.$0, true]):m!=null&&m.$==2?Some([m.$0, false]):null;
}
function Map2Opt1(fn, x, sn2){
  return Map_1((y) => fn(x, y), sn2);
}
function Map2Opt2(fn, y, sn1){
  return Map_1((x) => fn(x, y), sn1);
}
function WhenObsolete(snap, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else m!=null&&m.$==2?EnqueueSafe(m.$1, obs):m!=null&&m.$==3?EnqueueSafe(m.$1, obs):void 0;
}
let _c_15=Lazy((_i) => {
  Force(_c_4);
  return class TextView extends _c_4 {
    static {
      _c_15=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    ForTextView(){
      return Some(this.fillWith);
    }
    get AsChoiceView(){
      return Choice2Of2(this.fillWith);
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_16=Lazy((_i) => {
  Force(_c_4);
  return class VarIntUnchecked extends _c_4 {
    static {
      _c_16=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    ForTextView(){
      return Some(Map(String, this.fillWith.View));
    }
    AddAttribute(addAttr, el){
      (addAttr(el))(IntValueUnchecked(this.fillWith));
    }
    get AsChoiceView(){
      return Choice2Of2(Map(String, this.fillWith.View));
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_17=Lazy((_i) => {
  Force(_c_4);
  return class EventQ extends _c_4 {
    static {
      _c_17=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    get Value(){
      return this.fillWith;
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_18=Lazy((_i) => {
  Force(_c_4);
  return class VarStr extends _c_4 {
    static {
      _c_18=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    ForTextView(){
      return Some(this.fillWith.View);
    }
    AddAttribute(addAttr, el){
      (addAttr(el))(Value(this.fillWith));
    }
    get AsChoiceView(){
      return Choice2Of2(Map(String, this.fillWith.View));
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_19=Lazy((_i) => {
  Force(_c_4);
  return class VarFloatUnchecked extends _c_4 {
    static {
      _c_19=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    ForTextView(){
      return Some(Map(String, this.fillWith.View));
    }
    AddAttribute(addAttr, el){
      (addAttr(el))(FloatValueUnchecked(this.fillWith));
    }
    get AsChoiceView(){
      return Choice2Of2(Map(String, this.fillWith.View));
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
function Get(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):x.GetEnumerator();
}
function ArrayEnumerator(s){
  return new _c_20(0, null, (e) => {
    const i=e.s;
    return i<length(s)&&(e.c=get(s, i),e.s=i+1,true);
  }, void 0);
}
function StringEnumerator(s){
  return new _c_20(0, null, (e) => {
    const i=e.s;
    return i<s.length&&(e.c=s[i],e.s=i+1,true);
  }, void 0);
}
function Get0(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):"GetEnumerator0"in x?x.GetEnumerator0():x.GetEnumerator();
}
let _c_20=Lazy((_i) => class T extends _c_1 {
  static {
    _c_20=_i(this);
  }
  s;
  c;
  n;
  d;
  e;
  Dispose(){
    if(this.d)this.d(this);
  }
  MoveNext(){
    const m=this.n(this);
    this.e=m?1:2;
    return m;
  }
  get Current(){
    return this.e===1?this.c:this.e===0?FailWith("Enumeration has not started. Call MoveNext."):FailWith("Enumeration already finished.");
  }
  constructor(s, c, n, d){
    super();
    this.s=s;
    this.c=c;
    this.n=n;
    this.d=d;
    this.e=0;
  }
});
function Delay(mk){
  return(c) => {
    try {
      (mk())(c);
    }
    catch(e){
      c.k(No(e));
    }
  };
}
function Bind_1(r, f){
  return checkCancel((c) => {
    r(New_1((a) => {
      if(a.$==0){
        const x=a.$0;
        scheduler().Fork(() => {
          try {
            (f(x))(c);
          }
          catch(e){
            c.k(No(e));
          }
        });
      }
      else scheduler().Fork(() => {
        c.k(a);
      });
    }, c.ct));
  });
}
function Zero(){
  return _c_31.Zero;
}
function Start(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  scheduler().Fork(() => {
    if(!ct.c)c(New_1((a) => {
      if(a.$==1)UncaughtAsyncError(a.$0);
    }, ct));
  });
}
function Return(x){
  return(c) => {
    c.k(Ok(x));
  };
}
function checkCancel(r){
  return(c) => {
    if(c.ct.c)cancel(c);
    else r(c);
  };
}
function defCTS(){
  return _c_31.defCTS;
}
function UncaughtAsyncError(e){
  console.log("WebSharper: Uncaught asynchronous exception", e);
}
function cancel(c){
  c.k(Cc(new _c_39("New", c.ct)));
}
function scheduler(){
  return _c_31.scheduler;
}
function FromContinuations(subscribe){
  return(c) => {
    const continued=[false];
    const once=(cont) => {
      if(continued[0])FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
      else {
        continued[0]=true;
        scheduler().Fork(cont);
      }
    };
    subscribe((a) => {
      once(() => {
        c.k(Ok(a));
      });
    }, (e) => {
      once(() => {
        c.k(No(e));
      });
    }, (e) => {
      once(() => {
        c.k(Cc(e));
      });
    });
  };
}
function CreateEmbedNode(){
  return{Current:null, Dirty:false};
}
function UpdateEmbedNode(node, upd){
  node.Current=upd;
  node.Dirty=true;
}
function CreateRunState(parent, doc){
  return New_5(get_Empty_1(), CreateElemNode(parent, EmptyAttr(), doc));
}
function PerformAnimatedUpdate(childrenOnly, st, doc){
  if(get_UseAnimations()){
    const _1=null;
    return Delay(() => {
      const cur=FindAll(doc);
      const change=ComputeChangeAnim(st, cur);
      const enter=ComputeEnterAnim(st, cur);
      return Bind_1(Play(Append(change, ComputeExitAnim(st, cur))), () => Bind_1(SyncElemNodesNextFrame(childrenOnly, st), () => Bind_1(Play(enter), () => {
        st.PreviousNodes=cur;
        return Return(null);
      })));
    });
  }
  else return SyncElemNodesNextFrame(childrenOnly, st);
}
function PerformSyncUpdate(childrenOnly, st, doc){
  const cur=FindAll(doc);
  SyncElemNode(childrenOnly, st.Top);
  st.PreviousNodes=cur;
}
function LinkElement(el, children){
  InsertDoc(el, children, null);
}
function InsertBeforeDelim(afterDelim, doc){
  const p=afterDelim.parentNode;
  const before=globalThis.document.createTextNode("");
  p.insertBefore(before, afterDelim);
  LinkPrevElement(afterDelim, doc);
  return before;
}
function CreateElemNode(el, attr, children){
  LinkElement(el, children);
  const attr_1=Insert(el, attr);
  return _c_35.New(attr_1, children, null, el, Int(), GetOptional(attr_1.OnAfterRender));
}
function SyncElemNodesNextFrame(childrenOnly, st){
  if(BatchUpdatesEnabled()){
    const a=(ok) => {
      requestAnimationFrame(() => {
        SyncElemNode(childrenOnly, st.Top);
        ok();
      });
    };
    return FromContinuations((_1, _2, _3) => a.apply(null, [_1, _2, _3]));
  }
  else {
    SyncElemNode(childrenOnly, st.Top);
    return Return(null);
  }
}
function ComputeExitAnim(st, cur){
  return Concat_1(map_1((n) => GetExitAnim(n.Attr), ToArray(Except(cur, Filter((n) => HasExitAnim(n.Attr), st.PreviousNodes)))));
}
function ComputeEnterAnim(st, cur){
  return Concat_1(map_1((n) => GetEnterAnim(n.Attr), ToArray(Except(st.PreviousNodes, Filter((n) => HasEnterAnim(n.Attr), cur)))));
}
function ComputeChangeAnim(st, cur){
  const a=(n) => HasChangeAnim(n.Attr);
  const relevant=(a_1) => Filter(a, a_1);
  return Concat_1(map_1((n) => GetChangeAnim(n.Attr), ToArray(Intersect(relevant(st.PreviousNodes), relevant(cur)))));
}
function SyncElemNode(childrenOnly, el){
  !childrenOnly?SyncElement(el):void 0;
  Sync(el.Children);
  AfterRender(el);
}
function CreateTextNode(){
  return{
    Text:globalThis.document.createTextNode(""), 
    Dirty:false, 
    Value:""
  };
}
function UpdateTextNode(n, t){
  n.Value=t;
  n.Dirty=true;
}
function InsertDoc(parent, doc, pos){
  while(true)
    {
      if(doc!=null&&doc.$==1)return InsertNode(parent, doc.$0.El, pos);
      else if(doc!=null&&doc.$==2){
        const d=doc.$0;
        d.Dirty=false;
        doc=d.Current;
      }
      else if(doc==null)return pos;
      else if(doc!=null&&doc.$==4)return InsertNode(parent, doc.$0.Text, pos);
      else if(doc!=null&&doc.$==5)return InsertNode(parent, doc.$0, pos);
      else if(doc!=null&&doc.$==6)return foldBack((_1, _2) =>((((parent_1) =>(el) =>(pos_1) => el==null||el.constructor===Object?InsertDoc(parent_1, el, pos_1):InsertNode(parent_1, el, pos_1))(parent))(_1))(_2), doc.$0.Els, pos);
      else {
        const b=doc.$1;
        const a=doc.$0;
        doc=a;
        pos=InsertDoc(parent, b, pos);
      }
    }
}
function LinkPrevElement(el, children){
  InsertDoc(el.parentNode, children, el);
}
function SyncElement(el){
  function hasDirtyChildren(el_1){
    function dirty(doc){
      while(true)
        {
          if(doc!=null&&doc.$==0){
            const b=doc.$1;
            const a=doc.$0;
            if(dirty(a))return true;
            else doc=b;
          }
          else if(doc!=null&&doc.$==2){
            const d=doc.$0;
            if(d.Dirty)return true;
            else doc=d.Current;
          }
          else if(doc!=null&&doc.$==6){
            const t=doc.$0;
            return t.Dirty||exists_1(hasDirtyChildren, t.Holes);
          }
          else return false;
        }
    }
    return dirty(el_1.Children);
  }
  Sync_1(el.El, el.Attr);
  if(hasDirtyChildren(el))DoSyncElement(el);
}
function Sync(doc){
  while(true)
    {
      if(doc!=null&&doc.$==1)return SyncElemNode(false, doc.$0);
      else if(doc!=null&&doc.$==2){
        const n=doc.$0;
        doc=n.Current;
      }
      else if(doc==null)return null;
      else if(doc!=null&&doc.$==5)return null;
      else if(doc!=null&&doc.$==4){
        const d=doc.$0;
        return d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):null;
      }
      else if(doc!=null&&doc.$==6){
        const t=doc.$0;
        iter_2((h) => {
          SyncElemNode(false, h);
        }, t.Holes);
        iter_2((t_1) => {
          Sync_1(t_1[0], t_1[1]);
        }, t.Attrs);
        return AfterRender(t);
      }
      else {
        const b=doc.$1;
        const a=doc.$0;
        Sync(a);
        doc=b;
      }
    }
}
function AfterRender(el){
  const m=GetOptional(el.Render);
  if(m!=null&&m.$==1){
    m.$0(el.El);
    SetOptional(el, "Render", null);
  }
}
function InsertNode(parent, node, pos){
  InsertAt(parent, pos, node);
  return node;
}
function DoSyncElement(el){
  const parent=el.El;
  function ins(doc, pos){
    while(true)
      {
        if(doc!=null&&doc.$==1)return doc.$0.El;
        else if(doc!=null&&doc.$==2){
          const d=doc.$0;
          if(d.Dirty){
            d.Dirty=false;
            return InsertDoc(parent, d.Current, pos);
          }
          else doc=d.Current;
        }
        else if(doc==null)return pos;
        else if(doc!=null&&doc.$==4)return doc.$0.Text;
        else if(doc!=null&&doc.$==5)return doc.$0;
        else if(doc!=null&&doc.$==6){
          const t=doc.$0;
          if(t.Dirty)t.Dirty=false;
          return foldBack((_2, _3) => _2==null||_2.constructor===Object?ins(_2, _3):_2, t.Els, pos);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          doc=a;
          pos=ins(b, pos);
        }
      }
  }
  const p=el.El;
  Iter((e) => {
    RemoveNode(p, e);
  }, Except_2(DocChildren(el), Children(el.El, GetOptional(el.Delimiters))));
  let _1=el.Children;
  const m=GetOptional(el.Delimiters);
  ins(_1, m!=null&&m.$==1?m.$0[1]:null);
}
function EmbedDoc(Item){
  return{$:2, $0:Item};
}
function TreeDoc(Item){
  return{$:6, $0:Item};
}
function TextNodeDoc(Item){
  return{$:5, $0:Item};
}
function TextDoc(Item){
  return{$:4, $0:Item};
}
let _c_21=Lazy((_i) => class FSharpMap extends _c_1 {
  static {
    _c_21=_i(this);
  }
  tree;
  GetEnumerator(){
    return Get(map((kv) =>({K:kv.Key, V:kv.Value}), Enumerate(false, this.tree)));
  }
  Equals(other){
    return this.Count===other.Count&&forall2(Equals, this, other);
  }
  get Count(){
    const tree=this.tree;
    return tree==null?0:tree.Count;
  }
  Add_1(k, v){
    return new _c_21("New_1", Add(_c_32.New(k, v), this.tree));
  }
  get IsEmpty(){
    return this.tree==null;
  }
  GetHashCode(){
    return Hash(ofSeq_1(this));
  }
  get Tree(){
    return this.tree;
  }
  CompareTo0(other){
    return compareWith(Compare, this, other);
  }
  static New(s){
    return new this("New", s);
  }
  static New_1(tree){
    return new this("New_1", tree);
  }
  constructor(i, _1){
    let s;
    if(i=="New"){
      s=_1;
      i="New_1";
      _1=fromSeq(s);
    }
    if(i=="New_1"){
      const tree=_1;
      super();
      this.tree=tree;
    }
  }
});
function OfArray(a){
  return new _c_21("New_1", OfSeq(map((_1) => _c_32.New(_1[0], _1[1]), a)));
}
function FoldBack(f, m, s){
  return fold((_1, _2) => f(_2.Key, _2.Value, _1), s, Enumerate(true, m.Tree));
}
function ToSeq(m){
  return map((kv) =>[kv.Key, kv.Value], Enumerate(false, m.Tree));
}
function Int(){
  set_counter(counter()+1);
  return counter();
}
function set_counter(_1){
  _c_36.counter=_1;
}
function counter(){
  return _c_36.counter;
}
function Ready(Item1, Item2){
  return{
    $:2, 
    $0:Item1, 
    $1:Item2
  };
}
function Forever(Item){
  return{$:0, $0:Item};
}
function Waiting(Item1, Item2){
  return{
    $:3, 
    $0:Item1, 
    $1:Item2
  };
}
let _c_22=Lazy((_i) => class Dictionary extends _c_1 {
  static {
    _c_22=_i(this);
  }
  equals;
  hash;
  count;
  data;
  set_Item(k, v){
    this.set(k, v);
  }
  DAdd(k, v){
    this.add(k, v);
  }
  set(k, v){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null){
      this.count=this.count+1;
      this.data[h]=new Array({K:k, V:v});
    }
    else {
      const m=tryFindIndex_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      if(m==null){
        this.count=this.count+1;
        d.push({K:k, V:v});
      }
      else d[m.$0]={K:k, V:v};
    }
  }
  TryGetValue(k, res){
    const d=this.data[this.hash(k)];
    if(d==null)return false;
    else {
      const v=tryPick_1((a) => {
        const a_1=KeyValue(a);
        return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
      }, d);
      return v!=null&&v.$==1&&(res.set(v.$0),true);
    }
  }
  add(k, v){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null){
      this.count=this.count+1;
      this.data[h]=new Array({K:k, V:v});
    }
    else {
      exists_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d)?alreadyAdded():void 0;
      this.count=this.count+1;
      d.push({K:k, V:v});
    }
  }
  GetEnumerator(){
    return Get0(concat_2(GetFieldValues(this.data)));
  }
  ContainsKey(k){
    const d=this.data[this.hash(k)];
    return d==null?false:exists_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
  }
  Item(k){
    return this.get(k);
  }
  get Values(){
    return new _c_46(this);
  }
  RemoveKey(k){
    return this.remove(k);
  }
  get Keys(){
    return new _c_48(this);
  }
  get(k){
    const d=this.data[this.hash(k)];
    return d==null?notPresent():pick((a) => {
      const a_1=KeyValue(a);
      return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
    }, d);
  }
  remove(k){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null)return false;
    else {
      const r=filter((a) =>!this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      return length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true);
    }
  }
  static New_5(){
    return new this("New_5");
  }
  static New_6(init_2, equals, hash){
    return new this("New_6", init_2, equals, hash);
  }
  constructor(i, _1, _2, _3){
    if(i=="New_5"){
      i="New_6";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    if(i=="New_6"){
      const init_2=_1;
      const equals=_2;
      const hash=_3;
      super();
      this.equals=equals;
      this.hash=hash;
      this.count=0;
      this.data=[];
      const e=Get(init_2);
      try {
        while(e.MoveNext())
          {
            const x=e.Current;
            this.set(x.K, x.V);
          }
      }
      finally {
        if(typeof e=="object"&&isIDisposable(e))e.Dispose();
      }
    }
  }
});
let _c_23=Lazy((_i) => class HashSet extends _c_1 {
  static {
    _c_23=_i(this);
  }
  equals;
  hash;
  data;
  count;
  SAdd(item){
    return this.add(item);
  }
  Contains(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrContains(item, arr);
  }
  add(item){
    const h=this.hash(item);
    const arr=this.data[h];
    return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item, arr)?false:(arr.push(item),this.count=this.count+1,true);
  }
  arrContains(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item]))c=false;
      else i=i+1;
    return!c;
  }
  GetEnumerator(){
    return Get(concat_3(this.data));
  }
  ExceptWith(xs){
    const e=Get(xs);
    try {
      while(e.MoveNext())
        this.Remove(e.Current);
    }
    finally {
      if(typeof e=="object"&&isIDisposable(e))e.Dispose();
    }
  }
  get Count(){
    return this.count;
  }
  IntersectWith(xs){
    const other=new _c_23("New_4", xs, this.equals, this.hash);
    const all=concat_3(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++){
      const item=all[i];
      if(!other.Contains(item))this.Remove(item);
    }
  }
  Remove(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrRemove(item, arr)&&(this.count=this.count-1,true);
  }
  CopyTo(arr, index){
    const all=concat_3(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++)set(arr, i+index, all[i]);
  }
  arrRemove(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item])){
        arr.splice(i, 1);
        c=false;
      }
      else i=i+1;
    return!c;
  }
  static New_3(){
    return new this("New_3");
  }
  static New_4(init_2, equals, hash){
    return new this("New_4", init_2, equals, hash);
  }
  static New_2(init_2){
    return new this("New_2", init_2);
  }
  constructor(i, _1, _2, _3){
    if(i=="New_3"){
      i="New_4";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    let init_2;
    if(i=="New_2"){
      init_2=_1;
      i="New_4";
      _1=init_2;
      _2=Equals;
      _3=Hash;
    }
    if(i=="New_4"){
      const init_3=_1;
      const equals=_2;
      const hash=_3;
      super();
      this.equals=equals;
      this.hash=hash;
      this.data=[];
      this.count=0;
      const e=Get(init_3);
      try {
        while(e.MoveNext())
          this.add(e.Current);
      }
      finally {
        if(typeof e=="object"&&isIDisposable(e))e.Dispose();
      }
    }
  }
});
let _c_24=Lazy((_i) => class TemplateInitializer extends _c_1 {
  static {
    _c_24=_i(this);
  }
  static init;
  id;
  vars;
  static initialized;
  static instances;
  static GetOrAddHoleFor(id, holeName, initHole){
    let o;
    const d=_c_24.GetHolesFor(id);
    const m=(o=null,[d.TryGetValue(holeName, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const h=initHole();
      d.set_Item(holeName, h);
      return h;
    }
  }
  static GetHolesFor(id){
    let o;
    const m=(o=null,[_c_24.initialized.TryGetValue(id, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const d=new _c_22("New_5");
      _c_24.initialized.set_Item(id, d);
      return d;
    }
  }
  static {
    _c_24.initialized=new _c_22("New_5");
    _c_24.instances=new _c_22("New_5");
  }
});
let _c_25=Lazy((_i) => {
  Force(_c_4);
  return class VarBool extends _c_4 {
    static {
      _c_25=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    ForTextView(){
      return Some(Map(String, this.fillWith.View));
    }
    AddAttribute(addAttr, el){
      (addAttr(el))(Checked(this.fillWith));
    }
    get AsChoiceView(){
      return Choice2Of2(Map(String, this.fillWith.View));
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_26=Lazy((_i) => {
  Force(_c_4);
  return class VarDateTime extends _c_4 {
    static {
      _c_26=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    ForTextView(){
      return Some(Map((v) =>(new Date(v)).toLocaleString(), this.fillWith.View));
    }
    AddAttribute(addAttr, el){
      (addAttr(el))(DateTimeValue(this.fillWith));
    }
    get AsChoiceView(){
      return Choice2Of2(Map((v) =>(new Date(v)).toLocaleString(), this.fillWith.View));
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_27=Lazy((_i) => {
  Force(_c_4);
  return class VarFile extends _c_4 {
    static {
      _c_27=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    ForTextView(){
      return Some(Map(String, this.fillWith.View));
    }
    AddAttribute(addAttr, el){
      (addAttr(el))(FileValue(this.fillWith));
    }
    get AsChoiceView(){
      return Choice2Of2(Map(String, this.fillWith.View));
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_28=Lazy((_i) => {
  Force(_c_4);
  return class VarDomElement extends _c_4 {
    static {
      _c_28=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    get Value(){
      return this.fillWith;
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_29=Lazy((_i) => {
  Force(_c_4);
  return class VarStrList extends _c_4 {
    static {
      _c_29=_i(this);
    }
    name;
    fillWith;
    get Name(){
      return this.name;
    }
    ForTextView(){
      return Some(Map((l) => concat_1(",", l), this.fillWith.View));
    }
    AddAttribute(addAttr, el){
      (addAttr(el))(StringListValue(this.fillWith));
    }
    get AsChoiceView(){
      return Choice2Of2(Map(String, this.fillWith.View));
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
let _c_30=Lazy((_i) => class Exception extends _c_1 {
  static {
    _c_30=_i(this);
  }
});
function RunFullDocTemplate(fillWith){
  if(RenderedFullDocTemplate()==null){
    LoadLocalTemplates("");
    PrepareTemplateStrict("", null, globalThis.document.body, null);
    const x=ChildrenTemplate(globalThis.document.body, fillWith);
    const a=globalThis.document.body;
    (((a_1) => {
      _c_12.RunInPlace(true, a, a_1);
    })(x));
    const d=x;
    set_RenderedFullDocTemplate(Some(d));
    return d;
  }
  else return RenderedFullDocTemplate().$0;
}
function LoadLocalTemplates(baseName){
  !LocalTemplatesLoaded()?(set_LocalTemplatesLoaded(true),LoadNestedTemplates(globalThis.document.body, "")):void 0;
  LoadedTemplates().set_Item(baseName, LoadedTemplateFile(""));
}
function NamedTemplate(baseName, name, fillWith){
  let o;
  const m=(o=null,[LoadedTemplateFile(baseName).TryGetValue(name==null?"":name.$0, {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  return m[0]?ChildrenTemplate(m[1].cloneNode(true), fillWith):(console.warn("Local template doesn't exist", name),_c_12.Empty);
}
function RenderedFullDocTemplate(){
  return _c_37.RenderedFullDocTemplate;
}
function PrepareTemplateStrict(baseName, name, fakeroot, prepareLocalTemplate){
  const processedHTML5Templates=new _c_23("New_3");
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!==null){
            const next=_1.nextSibling;
            if(Equals(_1.nodeType, Node.TEXT_NODE))convertTextNode(_1);
            else if(Equals(_1.nodeType, Node.ELEMENT_NODE))convertElement(_1);
            _1=next;
          }
          else return null;
          break;
        case 1:
          const name_2=string(_1.nodeName, Some(3), null).toLowerCase();
          const m=name_2.indexOf(".");
          const p=m===-1?[baseName, name_2]:[string(name_2, null, Some(m-1)), string(name_2, Some(m+1), null)];
          const instName=p[1];
          const instBaseName=p[0];
          if(instBaseName!=""&&!LoadedTemplates().ContainsKey(instBaseName))return failNotLoaded(instName);
          else {
            if(instBaseName==""&&prepareLocalTemplate!=null)prepareLocalTemplate.$0(instName);
            const d=LoadedTemplates().Item(instBaseName);
            if(!d.ContainsKey(instName))return failNotLoaded(instName);
            else {
              const t=d.Item(instName);
              const instance=t.cloneNode(true);
              const usedHoles=new _c_23("New_3");
              const mappings=new _c_22("New_5");
              const attrs=_1.attributes;
              for(let i=0, _4=attrs.length-1;i<=_4;i++){
                const name_3=attrs.item(i).name.toLowerCase();
                const m_1=attrs.item(i).nodeValue;
                let _2=m_1==""?name_3:m_1.toLowerCase();
                mappings.set_Item(name_3, _2);
                if(!usedHoles.SAdd(name_3))console.warn("Hole mapped twice", name_3);
              }
              for(let i_1=0, _5=_1.childNodes.length-1;i_1<=_5;i_1++){
                const n=_1.childNodes[i_1];
                if(Equals(n.nodeType, Node.ELEMENT_NODE))if(!usedHoles.SAdd(n.nodeName.toLowerCase()))console.warn("Hole filled twice", instName);
              }
              const singleTextFill=_1.childNodes.length===1&&Equals(_1.firstChild.nodeType, Node.TEXT_NODE);
              if(singleTextFill){
                const x=fillTextHole(instance, _1.firstChild.textContent, instName);
                const f=((usedHoles_1) =>(a) => usedHoles_1.SAdd(a))(usedHoles);
                let _3=((a) =>(o) => {
                  if(o!=null)a(o.$0);
                })((x_1) => {
                  f(x_1);
                });
                _3(x);
              }
              removeHolesExcept(instance, usedHoles);
              if(!singleTextFill){
                for(let i_2=0, _6=_1.childNodes.length-1;i_2<=_6;i_2++){
                  const n_1=_1.childNodes[i_2];
                  if(Equals(n_1.nodeType, Node.ELEMENT_NODE))if(n_1.hasAttributes())fillInstanceAttrs(instance, n_1);
                  else fillDocHole(instance, n_1);
                }
              }
              mapHoles(instance, mappings);
              fill(instance, _1.parentNode, _1);
              _1.parentNode.removeChild(_1);
              return;
            }
          }
          break;
      }
  }
  function fillDocHole(instance, fillWith){
    const name_2=fillWith.nodeName.toLowerCase();
    const fillHole=(p, n) => {
      if(name_2=="title"&&fillWith.hasChildNodes()){
        const parsed=ParseHTMLIntoFakeRoot(fillWith.textContent);
        fillWith.removeChild(fillWith.firstChild);
        while(parsed.hasChildNodes())
          fillWith.appendChild(parsed.firstChild);
      }
      convertElement(fillWith);
      return fill(fillWith, p, n);
    };
    foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
      const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
      for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
        const attrName=get(holeAttrs, i);
        let this_1=new RegExp("\\${"+name_2+"}", "ig");
        let _1=e.getAttribute(attrName).replace(this_1, fillWith.textContent);
        e.setAttribute(attrName, _1);
      }
    });
    const m=instance.querySelector("[ws-hole="+name_2+"]");
    if(Equals(m, null)){
      const m_1=instance.querySelector("[ws-replace="+name_2+"]");
      if(Equals(m_1, null)){
        const m_2=instance.querySelector("slot[name="+name_2+"]");
        return instance.tagName.toLowerCase()=="template"?(fillHole(m_2.parentNode, m_2),void m_2.parentNode.removeChild(m_2)):null;
      }
      else {
        fillHole(m_1.parentNode, m_1);
        m_1.parentNode.removeChild(m_1);
        return;
      }
    }
    else {
      while(m.hasChildNodes())
        m.removeChild(m.lastChild);
      m.removeAttribute("ws-hole");
      return fillHole(m, null);
    }
  }
  function convertElement(el){
    if(!el.hasAttribute("ws-preserve"))if(StartsWith(el.nodeName.toLowerCase(), "ws-"))convertInstantiation(el);
    else {
      convertAttrs(el);
      convertNodeAndSiblings(el.firstChild);
    }
  }
  function convertNodeAndSiblings(n){
    return recF(0, n);
  }
  function convertInstantiation(el){
    return recF(1, el);
  }
  function convertNestedTemplates(el){
    while(true)
      {
        const m=el.querySelector("[ws-template]");
        if(Equals(m, null)){
          const m_1=el.querySelector("[ws-children-template]");
          if(Equals(m_1, null)){
            const idTemplates=el.querySelectorAll("template[id]");
            for(let i=1, _1=idTemplates.length-1;i<=_1;i++){
              const n=idTemplates[i];
              if(processedHTML5Templates.Contains(n)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n.getAttribute("id")), n, null);
                processedHTML5Templates.SAdd(n);
              }
            }
            const nameTemplates=el.querySelectorAll("template[name]");
            for(let i_1=1, _2=nameTemplates.length-1;i_1<=_2;i_1++){
              const n_1=nameTemplates[i_1];
              if(processedHTML5Templates.Contains(n_1)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n_1.getAttribute("name")), n_1, null);
                processedHTML5Templates.SAdd(n_1);
              }
            }
            return null;
          }
          else {
            const name_2=m_1.getAttribute("ws-children-template");
            m_1.removeAttribute("ws-children-template");
            PrepareTemplateStrict(baseName, Some(name_2), m_1, null);
            el=el;
          }
        }
        else {
          const name_3=m.getAttribute("ws-template");
          (PrepareSingleTemplate(baseName, Some(name_3), m))(null);
          el=el;
        }
      }
  }
  const name_1=(name==null?"":name.$0).toLowerCase();
  LoadedTemplateFile(baseName).set_Item(name_1, fakeroot);
  if(fakeroot.hasChildNodes()){
    convertNestedTemplates(fakeroot);
    convertNodeAndSiblings(fakeroot.firstChild);
  }
}
function ChildrenTemplate(el, fillWith){
  let _1;
  const p=InlineTemplate(el, append(fillWith, GlobalHoles().Values));
  const updates=p[1];
  const docTreeNode=p[0];
  const m=docTreeNode.Els;
  return!Equals(m, null)&&m.length===1&&(get(m, 0)instanceof Node&&(Equals(get(m, 0).nodeType, Node.ELEMENT_NODE)&&(_1=get(m, 0),true)))?_c_38.TreeNode(docTreeNode, updates):_c_12.Mk(TreeDoc(docTreeNode), updates);
}
function set_RenderedFullDocTemplate(_1){
  _c_37.RenderedFullDocTemplate=_1;
}
function LocalTemplatesLoaded(){
  return _c_37.LocalTemplatesLoaded;
}
function set_LocalTemplatesLoaded(_1){
  _c_37.LocalTemplatesLoaded=_1;
}
function LoadNestedTemplates(root, baseName){
  const loadedTpls=LoadedTemplateFile(baseName);
  const rawTpls=new _c_22("New_5");
  const wsTemplates=root.querySelectorAll("[ws-template]");
  for(let i=0, _1=wsTemplates.length-1;i<=_1;i++){
    const node=wsTemplates[i];
    const name=node.getAttribute("ws-template").toLowerCase();
    node.removeAttribute("ws-template");
    rawTpls.set_Item(name, FakeRootSingle(node));
  }
  const wsChildrenTemplates=root.querySelectorAll("[ws-children-template]");
  for(let i_1=0, _2=wsChildrenTemplates.length-1;i_1<=_2;i_1++){
    const node_1=wsChildrenTemplates[i_1];
    const name_1=node_1.getAttribute("ws-children-template").toLowerCase();
    node_1.removeAttribute("ws-children-template");
    rawTpls.set_Item(name_1, FakeRoot(node_1));
  }
  const html5TemplateBasedTemplates=root.querySelectorAll("template[id]");
  for(let i_2=0, _3=html5TemplateBasedTemplates.length-1;i_2<=_3;i_2++){
    const node_2=html5TemplateBasedTemplates[i_2];
    rawTpls.set_Item(node_2.getAttribute("id").toLowerCase(), FakeRootFromHTMLTemplate(node_2));
  }
  const html5TemplateBasedTemplates_1=root.querySelectorAll("template[name]");
  for(let i_3=0, _4=html5TemplateBasedTemplates_1.length-1;i_3<=_4;i_3++){
    const node_3=html5TemplateBasedTemplates_1[i_3];
    rawTpls.set_Item(node_3.getAttribute("name").toLowerCase(), FakeRootFromHTMLTemplate(node_3));
  }
  const instantiated=new _c_23("New_3");
  function prepareTemplate(name_2){
    if(!loadedTpls.ContainsKey(name_2)){
      let o;
      const m=(o=null,[rawTpls.TryGetValue(name_2, {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        instantiated.SAdd(name_2);
        rawTpls.RemoveKey(name_2);
        PrepareTemplateStrict(baseName, Some(name_2), m[1], Some(prepareTemplate));
      }
      else console.warn(instantiated.Contains(name_2)?"Encountered loop when instantiating "+name_2:"Local template does not exist: "+name_2);
    }
  }
  while(rawTpls.count>0)
    prepareTemplate(head(rawTpls.Keys));
}
function LoadedTemplates(){
  return _c_37.LoadedTemplates;
}
function LoadedTemplateFile(name){
  let o;
  const m=(o=null,[LoadedTemplates().TryGetValue(name, {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  if(m[0])return m[1];
  else {
    const d=new _c_22("New_5");
    LoadedTemplates().set_Item(name, d);
    return d;
  }
}
function foreachNotPreserved(root, selector, f){
  IterSelector(root, selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
function PrepareSingleTemplate(baseName, name, el){
  const root=FakeRootSingle(el);
  return(p) => {
    PrepareTemplateStrict(baseName, name, root, p);
  };
}
function InlineTemplate(el, fillWith){
  let _1;
  const holes=[];
  const updates=[];
  const attrs=[];
  const afterRender=[];
  const fw=new _c_22("New_5");
  const e=Get(fillWith);
  try {
    while(e.MoveNext())
      {
        const x=e.Current;
        fw.set_Item(x.Name, x);
      }
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
  const els=ChildrenArray(el);
  const addAttr=(el_1, attr) => {
    const attr_1=Insert(el_1, attr);
    updates.push(Updates(attr_1));
    attrs.push([el_1, attr_1]);
    const m=GetOptional(attr_1.OnAfterRender);
    if(m==null)return null;
    else {
      const f=m.$0;
      afterRender.push(() => {
        f(el_1);
      });
      return;
    }
  };
  const tryGetAsDoc=(name) => {
    let o;
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof _c_9)return Some(th.Value);
      else if(th instanceof _c_10)return Some(_c_12.TextNode(th.Value));
      else {
        const o_1=th.ForTextView();
        return o_1==null?null:Some(_c_12.TextView(o_1.$0));
      }
    }
    else return null;
  };
  foreachNotPreserved(el, "[ws-hole]", (p) => {
    const name=p.getAttribute("ws-hole");
    p.removeAttribute("ws-hole");
    while(p.hasChildNodes())
      p.removeChild(p.lastChild);
    const m=tryGetAsDoc(name);
    if(m!=null&&m.$==1){
      const doc=m.$0;
      LinkElement(p, doc.docNode);
      holes.push(_c_35.New(Empty(p), doc.docNode, null, p, Int(), null));
      updates.push(doc.updates);
    }
  });
  foreachNotPreserved(el, "[ws-replace]", (e_1) => {
    const m=tryGetAsDoc(e_1.getAttribute("ws-replace"));
    if(m!=null&&m.$==1){
      const doc=m.$0;
      const p=e_1.parentNode;
      const after=globalThis.document.createTextNode("");
      p.replaceChild(after, e_1);
      const before=InsertBeforeDelim(after, doc.docNode);
      const o=tryFindIndex_1((y) => e_1===y, els);
      if(o==null){ }
      else set(els, o.$0, doc.docNode);
      holes.push(_c_35.New(Empty(p), doc.docNode, Some([before, after]), p, Int(), null));
      updates.push(doc.updates);
    }
  });
  let isDefaultSlotProcessed=false;
  foreachNotPreserved(el, "slot", (p) => {
    const name=p.getAttribute("name");
    const name_1=name==""||name==null?"default":name.toLowerCase();
    if(isDefaultSlotProcessed&&name_1=="default"||!Equals(el.parentElement, null)){ }
    else {
      while(p.hasChildNodes())
        p.removeChild(p.lastChild);
      if(name_1=="default")isDefaultSlotProcessed=true;
      const m=tryGetAsDoc(name_1);
      if(m!=null&&m.$==1){
        const doc=m.$0;
        LinkElement(p, doc.docNode);
        holes.push(_c_35.New(Empty(p), doc.docNode, null, p, Int(), null));
        updates.push(doc.updates);
      }
    }
  });
  foreachNotPreserved(el, "[ws-attr]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-attr");
    e_1.removeAttribute("ws-attr");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof _c_40)addAttr(e_1, th.Value);
      else console.warn("Attribute hole filled with non-attribute data", name);
    }
  });
  foreachNotPreserved(el, "[ws-on]", (e_1) => {
    addAttr(e_1, _c_42.Concat(choose((x_1) => {
      let o;
      const a=SplitChars(x_1, [":"], 1);
      const m=(o=null,[fw.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        const th=m[1];
        return th instanceof _c_41?Some(Handler(get(a, 0), th.Value)):th instanceof _c_17?Some(_c_42.Handler(get(a, 0), th.Value)):(console.warn("Event hole on"+get(a, 0)+" filled with non-event data", get(a, 1)),null);
      }
      else return null;
    }, SplitChars(e_1.getAttribute("ws-on"), [" "], 1))));
    e_1.removeAttribute("ws-on");
  });
  foreachNotPreserved(el, "[ws-onafterrender]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-onafterrender");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof _c_43){
        e_1.removeAttribute("ws-onafterrender");
        addAttr(e_1, OnAfterRender(th.Value));
      }
      else if(th instanceof _c_44){
        e_1.removeAttribute("ws-onafterrender");
        addAttr(e_1, OnAfterRender(th.Value));
      }
      else console.warn("onafterrender hole filled with non-onafterrender data", name);
    }
  });
  foreachNotPreserved(el, "[ws-var]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-var");
    e_1.removeAttribute("ws-var");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])m[1].AddAttribute((_5) =>(_6) => addAttr(_5, _6), e_1);
  });
  const wsdomHandling=() => {
    foreachNotPreservedwsDOM("[ws-dom]", (e_1) => {
      let o;
      let toWatch;
      let r;
      const m=(o=null,[fw.TryGetValue(e_1.getAttribute("ws-dom").toLowerCase(), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        const th=m[1];
        if(th instanceof _c_28){
          const var_1=th.Value;
          e_1.removeAttribute("ws-dom");
          toWatch=e_1;
          const mo=new MutationObserver((_5, mo_1) => {
            iter_2((mr) => {
              mr.removedNodes.forEach(CreateFuncWithArgs((_6) => _6[0]===toWatch&&mr.addedNodes.length!==1?(var_1.SetFinal(null),mo_1.disconnect()):null), null);
            }, _5);
          });
          if(e_1.parentElement!==null)mo.observe(e_1.parentElement, (r={},r.childList=true,r));
          var_1.Set(Some(e_1));
          Sink((nel) => {
            if(nel!=null&&nel.$==1){
              const nel_1=nel.$0;
              if(toWatch===nel_1){ }
              else {
                toWatch.replaceWith(nel_1);
                toWatch=nel_1;
              }
            }
            else {
              toWatch.remove();
              mo.disconnect();
            }
          }, var_1.View);
        }
      }
    });
  };
  foreachNotPreserved(el, "[ws-attr-holes]", (e_1) => {
    const re=new RegExp(TextHoleRE(), "g");
    const holeAttrs=SplitChars(e_1.getAttribute("ws-attr-holes"), [" "], 1);
    e_1.removeAttribute("ws-attr-holes");
    for(let i=0, _5=holeAttrs.length-1;i<=_5;i++)((() => {
      let _6;
      const attrName=get(holeAttrs, i);
      const s=e_1.getAttribute(attrName);
      let m=null;
      let lastIndex=0;
      const res=[];
      while(m=re.exec(s),m!==null)
        {
          const textBefore=string(s, Some(lastIndex), Some(re.lastIndex-get(m, 0).length-1));
          lastIndex=re.lastIndex;
          res.push([textBefore, get(m, 1)]);
        }
      const finalText=string(s, Some(lastIndex), null);
      re.lastIndex=0;
      const value=foldBack((_7, _8) =>(((t) => {
        const textBefore_1=t[0];
        const holeName=t[1];
        return(t_1) => {
          let o;
          const textAfter=t_1[0];
          const views=t_1[1];
          const m_1=(o=null,[fw.TryGetValue(holeName, {get:() => o, set:(v) => {
            o=v;
          }}), o]);
          const holeContent=m_1[0]?m_1[1].AsChoiceView:Choice1Of2("");
          return holeContent.$==1?[textBefore_1, _c_13.Cons(textAfter==""?holeContent.$0:Map((s_5) => s_5+textAfter, holeContent.$0), views)]:[textBefore_1+holeContent.$0+textAfter, views];
        };
      })(_7))(_8), res, [finalText, _c_13.Empty]);
      if(value[1].$==1){
        if(value[1].$1.$==1){
          if(value[1].$1.$1.$==1){
            if(value[1].$1.$1.$1.$==0){
              const s_1=value[0];
              _6=Dynamic_1(attrName, Map3((_7, _8, _9) => s_1+_7+_8+_9, value[1].$0, value[1].$1.$0, value[1].$1.$1.$0));
            }
            else {
              const s_2=value[0];
              _6=Dynamic_1(attrName, Map((vs) => s_2+concat_1("", vs), Sequence(value[1])));
            }
          }
          else {
            const s_3=value[0];
            _6=Dynamic_1(attrName, Map2((_7, _8) => s_3+_7+_8, value[1].$0, value[1].$1.$0));
          }
        }
        else if(value[0]=="")_6=Dynamic_1(attrName, value[1].$0);
        else {
          const s_4=value[0];
          _6=Dynamic_1(attrName, Map((v) => s_4+v, value[1].$0));
        }
      }
      else _6=_c_42.Create(attrName, value[0]);
      return addAttr(e_1, _6);
    })());
  });
  const _2=afterRender.length==0?Some(() => {
    wsdomHandling();
  }):Some((el_1) => {
    wsdomHandling();
    iter_2((f) => {
      f(el_1);
    }, afterRender);
  });
  const _3=!Equals(els, null)&&els.length===1&&(get(els, 0)instanceof Node&&(get(els, 0)instanceof Element&&(_1=get(els, 0),true)))?Some(_1):null;
  let _4=DeleteEmptyFields({
    Els:els, 
    Dirty:true, 
    Holes:holes, 
    Attrs:attrs, 
    Render:_2?_2.$0:void 0, 
    El:_3?_3.$0:void 0
  }, ["Render", "El"]);
  return[_4, TreeReduce(Const(), Map2Unit, updates)];
}
function GlobalHoles(){
  return _c_37.GlobalHoles;
}
function FakeRootSingle(el){
  el.removeAttribute("ws-template");
  const m=el.getAttribute("ws-replace");
  if(m==null){ }
  else {
    el.removeAttribute("ws-replace");
    const m_1=el.parentNode;
    if(Equals(m_1, null)){ }
    else {
      const n=globalThis.document.createElement(el.tagName);
      n.setAttribute("ws-replace", m);
      m_1.replaceChild(n, el);
    }
  }
  const fakeroot=globalThis.document.createElement("div");
  fakeroot.appendChild(el);
  return fakeroot;
}
function FakeRoot(parent){
  const fakeroot=globalThis.document.createElement("div");
  while(parent.hasChildNodes())
    fakeroot.appendChild(parent.firstChild);
  return fakeroot;
}
function FakeRootFromHTMLTemplate(parent){
  const fakeroot=globalThis.document.createElement("div");
  const content=parent.content;
  for(let i=0, _1=content.childNodes.length-1;i<=_1;i++)fakeroot.appendChild(content.childNodes[i].cloneNode(true));
  return fakeroot;
}
function TextHoleRE(){
  return _c_37.TextHoleRE;
}
function foreachNotPreservedwsDOM(selector, f){
  IterSelectorDoc(selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
function Obsolete(sn){
  let _1;
  const m=sn.s;
  if(m==null||(m!=null&&m.$==2?(_1=m.$1,false):m!=null&&m.$==3?(_1=m.$1,false):true))void 0;
  else {
    sn.s=null;
    for(let i=0, _2=length(_1)-1;i<=_2;i++){
      const o=get(_1, i);
      if(typeof o=="object")(((sn_1) => {
        Obsolete(sn_1);
      })(o));
      else o();
    }
  }
}
function New_1(k, ct){
  return{k:k, ct:ct};
}
function No(Item){
  return{$:1, $0:Item};
}
function Ok(Item){
  return{$:0, $0:Item};
}
function Cc(Item){
  return{$:2, $0:Item};
}
let _c_31=Lazy((_i) => class $StartupCode_Concurrency {
  static {
    _c_31=_i(this);
  }
  static GetCT;
  static Zero;
  static defCTS;
  static scheduler;
  static noneCT;
  static {
    this.noneCT=New_2(false, []);
    this.scheduler=new _c_33();
    this.defCTS=[new _c_34()];
    this.Zero=Return();
    this.GetCT=(c) => {
      c.k(Ok(c.ct));
    };
  }
});
function New_2(IsCancellationRequested, Registrations){
  return{c:IsCancellationRequested, r:Registrations};
}
function New_3(Node_1, Left, Right, Height, Count){
  return{
    Node:Node_1, 
    Left:Left, 
    Right:Right, 
    Height:Height, 
    Count:Count
  };
}
let _c_32=Lazy((_i) => class Pair {
  static {
    _c_32=_i(this);
  }
  Key;
  Value;
  Equals(other){
    return Equals(this.Key, other.Key);
  }
  GetHashCode(){
    return Hash(this.Key);
  }
  CompareTo0(other){
    return Compare(this.Key, other.Key);
  }
  static New(Key, Value_1){
    return Create_1(_c_32, {Key:Key, Value:Value_1});
  }
});
function TryParse(s, r){
  return TryParse_2(s, -2147483648, 2147483647, r);
}
function alreadyAdded(){
  throw new _c_49("New_2", "An item with the same key has already been added.");
}
function notPresent(){
  throw new _c_52("New");
}
let _c_33=Lazy((_i) => class Scheduler extends _c_1 {
  static {
    _c_33=_i(this);
  }
  idle;
  robin;
  Fork(action){
    this.robin.push(action);
    this.idle?(this.idle=false,setTimeout(() => {
      this.tick();
    }, 0)):void 0;
  }
  tick(){
    const t=Date.now();
    let loop=true;
    while(loop)
      if(this.robin.length===0){
        this.idle=true;
        loop=false;
      }
      else {
        (this.robin.shift())();
        Date.now()-t>40?(setTimeout(() => {
          this.tick();
        }, 0),loop=false):void 0;
      }
  }
  constructor(){
    super();
    this.idle=true;
    this.robin=[];
  }
});
let _c_34=Lazy((_i) => class CancellationTokenSource extends _c_1 {
  static {
    _c_34=_i(this);
  }
  init;
  c;
  pending;
  r;
  constructor(){
    super();
    this.c=false;
    this.pending=null;
    this.r=[];
    this.init=1;
  }
});
let _c_35=Lazy((_i) => class DocElemNode {
  static {
    _c_35=_i(this);
  }
  Attr;
  Children;
  Delimiters;
  El;
  ElKey;
  Render;
  Equals(o){
    return this.ElKey===o.ElKey;
  }
  GetHashCode(){
    return this.ElKey;
  }
  static New(Attr, Children_1, Delimiters, El, ElKey, Render){
    const _1={
      Attr:Attr, 
      Children:Children_1, 
      El:El, 
      ElKey:ElKey
    };
    let _2=(SetOptional(_1, "Delimiters", Delimiters),SetOptional(_1, "Render", Render),_1);
    return Create_1(_c_35, _2);
  }
});
function fromSeq(s){
  const a=ofSeq_1(map((_1) => _c_32.New(_1[0], _1[1]), distinctBy((t) => t[0], rev(s))));
  sortInPlace(a);
  return Build(a, 0, a.length-1);
}
let _c_36=Lazy((_i) => class $StartupCode_Abbrev {
  static {
    _c_36=_i(this);
  }
  static counter;
  static {
    this.counter=0;
  }
});
function WriteLink(s, q){
  const query=q.IsEmpty?"":"?"+WriteQuery(q);
  return"/"+Concat(s)+query;
}
function Concat(xs){
  let start;
  const sb=[];
  start=true;
  iter_1((x) => {
    if(!IsNullOrEmpty(x)){
      start?start=false:sb.push("/");
      sb.push(x);
    }
  }, xs);
  return Join_1("", ofSeq_1(sb));
}
function WriteQuery(q){
  return concat_1("&", map((_1) => _1[0]+"="+_1[1], ToSeq(q)));
}
let _c_37=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c_37=_i(this);
  }
  static RenderedFullDocTemplate;
  static TextHoleRE;
  static GlobalHoles;
  static LocalTemplatesLoaded;
  static LoadedTemplates;
  static {
    this.LoadedTemplates=new _c_22("New_5");
    this.LocalTemplatesLoaded=false;
    this.GlobalHoles=new _c_22("New_5");
    this.TextHoleRE="\\${([^}]+)}";
    this.RenderedFullDocTemplate=null;
  }
});
function convertTextNode(n){
  let m=null;
  let li=0;
  const s=n.textContent;
  const strRE=new RegExp(TextHoleRE(), "g");
  while(m=strRE.exec(s),m!==null)
    {
      n.parentNode.insertBefore(globalThis.document.createTextNode(string(s, Some(li), Some(strRE.lastIndex-get(m, 0).length-1))), n);
      li=strRE.lastIndex;
      const hole=globalThis.document.createElement("span");
      hole.setAttribute("ws-replace", get(m, 1).toLowerCase());
      n.parentNode.insertBefore(hole, n);
    }
  strRE.lastIndex=0;
  n.textContent=string(s, Some(li), null);
}
function failNotLoaded(name){
  console.warn("Instantiating non-loaded template", name);
}
function fillTextHole(instance, fillWith, templateName){
  const m=instance.querySelector("[ws-replace]");
  return Equals(m, null)?(console.warn("Filling non-existent text hole", templateName),null):(m.parentNode.replaceChild(globalThis.document.createTextNode(fillWith), m),Some(m.getAttribute("ws-replace")));
}
function removeHolesExcept(instance, dontRemove){
  const run=(attrName) => {
    foreachNotPreserved(instance, "["+attrName+"]", (e) => {
      if(!dontRemove.Contains(e.getAttribute(attrName)))e.removeAttribute(attrName);
    });
  };
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  foreachNotPreserved(instance, "[ws-hole]", (e) => {
    if(!dontRemove.Contains(e.getAttribute("ws-hole"))){
      e.removeAttribute("ws-hole");
      while(e.hasChildNodes())
        e.removeChild(e.lastChild);
    }
  });
  foreachNotPreserved(instance, "[ws-replace]", (e) => {
    if(!dontRemove.Contains(e.getAttribute("ws-replace")))e.parentNode.removeChild(e);
  });
  foreachNotPreserved(instance, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat_1(" ", filter((x) => dontRemove.Contains(get(SplitChars(x, [":"], 1), 1)), SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
      const attrName=get(holeAttrs, i);
      let this_1=new RegExp(TextHoleRE(), "g");
      let _1=e.getAttribute(attrName).replace(this_1, (_3, _4) => dontRemove.Contains(_4)?_3:"");
      e.setAttribute(attrName, _1);
    }
  });
}
function fillInstanceAttrs(instance, fillWith){
  convertAttrs(fillWith);
  const name=fillWith.nodeName.toLowerCase();
  const m=instance.querySelector("[ws-attr="+name+"]");
  if(Equals(m, null))console.warn("Filling non-existent attr hole", name);
  else {
    m.removeAttribute("ws-attr");
    for(let i=0, _1=fillWith.attributes.length-1;i<=_1;i++){
      const a=fillWith.attributes.item(i);
      if(a.name=="class"&&m.hasAttribute("class"))m.setAttribute("class", m.getAttribute("class")+" "+a.nodeValue);
      else m.setAttribute(a.name, a.nodeValue);
    }
  }
}
function mapHoles(t, mappings){
  const run=(attrName) => {
    foreachNotPreserved(t, "["+attrName+"]", (e) => {
      let o;
      const m=(o=null,[mappings.TryGetValue(e.getAttribute(attrName).toLowerCase(), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0])e.setAttribute(attrName, m[1]);
    });
  };
  run("ws-hole");
  run("ws-replace");
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  foreachNotPreserved(t, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat_1(" ", map_1((x) => {
      let o;
      const a=SplitChars(x, [":"], 1);
      const m=(o=null,[mappings.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      return m[0]?get(a, 0)+":"+m[1]:x;
    }, SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(t, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _1=holeAttrs.length-1;i<=_1;i++)((() => {
      const attrName=get(holeAttrs, i);
      return e.setAttribute(attrName, fold((_2, _3) => {
        const a=KeyValue(_3);
        return _2.replace(new RegExp("\\${"+a[0]+"}", "ig"), "${"+a[1]+"}");
      }, e.getAttribute(attrName), mappings));
    })());
  });
}
function fill(fillWith, p, n){
  while(true)
    {
      if(fillWith.hasChildNodes())n=p.insertBefore(fillWith.lastChild, n);
      else return null;
    }
}
function convertAttrs(el){
  const attrs=el.attributes;
  const toRemove=[];
  const events=[];
  const holedAttrs=[];
  for(let i=0, _2=attrs.length-1;i<=_2;i++){
    const a=attrs.item(i);
    if(StartsWith(a.nodeName, "ws-on")&&a.nodeName!="ws-onafterrender"&&a.nodeName!="ws-on"){
      toRemove.push(a.nodeName);
      events.push(string(a.nodeName, Some("ws-on".length), null)+":"+a.nodeValue.toLowerCase());
    }
    else if(!StartsWith(a.nodeName, "ws-")&&(new RegExp(TextHoleRE())).test(a.nodeValue)){
      let this_1=new RegExp(TextHoleRE(), "g");
      let _1=a.nodeValue.replace(this_1, (_3, _4) =>"${"+_4.toLowerCase()+"}");
      a.nodeValue=_1;
      holedAttrs.push(a.nodeName);
    }
    else void 0;
  }
  if(!(events.length==0))el.setAttribute("ws-on", concat_1(" ", events));
  if(!(holedAttrs.length==0))el.setAttribute("ws-attr-holes", concat_1(" ", holedAttrs));
  const lowercaseAttr=(name) => {
    const m=el.getAttribute(name);
    if(m==null){ }
    else el.setAttribute(name, m.toLowerCase());
  };
  lowercaseAttr("ws-hole");
  lowercaseAttr("ws-replace");
  lowercaseAttr("ws-attr");
  lowercaseAttr("ws-onafterrender");
  lowercaseAttr("ws-var");
  iter_2((a_1) => {
    el.removeAttribute(a_1);
  }, toRemove);
}
function string(source, start, finish){
  if(start==null){
    if(finish!=null&&finish.$==1){
      const f=finish.$0;
      return f<0?"":source.slice(0, f+1);
    }
    else return"";
  }
  else if(finish==null)return source.slice(start.$0);
  else {
    const f_1=finish.$0;
    return f_1<0?"":source.slice(start.$0, f_1+1);
  }
}
function ParseHTMLIntoFakeRoot(elem){
  const root=globalThis.document.createElement("div");
  if(!rhtml().test(elem)){
    root.appendChild(globalThis.document.createTextNode(elem));
    return root;
  }
  else {
    const m=rtagName().exec(elem);
    const tag=Equals(m, null)?"":get(m, 1).toLowerCase();
    const w=(wrapMap())[tag];
    const p=w?w:defaultWrap();
    root.innerHTML=p[1]+elem.replace(rxhtmlTag(), "<$1></$2>")+p[2];
    function unwrap(elt, a){
      while(true)
        {
          if(a===0)return elt;
          else {
            const i=a;
            elt=elt.lastChild;
            a=i-1;
          }
        }
    }
    return unwrap(root, p[0]);
  }
}
function rhtml(){
  return _c_50.rhtml;
}
function wrapMap(){
  return _c_50.wrapMap;
}
function defaultWrap(){
  return _c_50.defaultWrap;
}
function rxhtmlTag(){
  return _c_50.rxhtmlTag;
}
function rtagName(){
  return _c_50.rtagName;
}
function IterSelector(el, selector, f){
  const l=el.querySelectorAll(selector);
  for(let i=0, _1=l.length-1;i<=_1;i++)f(l[i]);
}
function ChildrenArray(element){
  const a=[];
  for(let i=0, _1=element.childNodes.length-1;i<=_1;i++)a.push(element.childNodes[i]);
  return a;
}
function IterSelectorDoc(selector, f){
  const l=globalThis.document.querySelectorAll(selector);
  for(let i=0, _1=l.length-1;i<=_1;i++)f(l[i]);
}
function InsertAt(parent, pos, node){
  let _1;
  if(node.parentNode===parent){
    const m=node.nextSibling;
    let _2=Equals(m, null)?null:m;
    _1=pos===_2;
  }
  else _1=false;
  if(!_1)parent.insertBefore(node, pos);
}
function RemoveNode(parent, el){
  if(el.parentNode===parent)parent.removeChild(el);
}
let _c_38=Lazy((_i) => {
  Force(_c_12);
  return class Elt extends _c_12 {
    static {
      _c_38=_i(this);
    }
    docNode_1;
    updates_1;
    elt;
    rvUpdates;
    static TreeNode(tree, updates){
      const rvUpdates=_c_45.Create(updates);
      const x=map_1((_3) => Updates(_3[1]), tree.Attrs);
      let _1=TreeReduce(Const(), Map2Unit, x);
      let _2=Map2Unit(_1, rvUpdates.v);
      return new Elt(TreeDoc(tree), _2, get(tree.Els, 0), rvUpdates);
    }
    constructor(docNode, updates, elt, rvUpdates){
      super(docNode, updates);
      this.docNode_1=docNode;
      this.updates_1=updates;
      this.elt=elt;
      this.rvUpdates=rvUpdates;
    }
  };
});
function get_UseAnimations(){
  return UseAnimations();
}
function Play(anim){
  const _1=null;
  return Delay(() => Bind_1(Run(() => { }, Actions(anim)), () => {
    Finalize(anim);
    return Return(null);
  }));
}
function Append(a, a_1){
  return Anim(Append_1(a.$0, a_1.$0));
}
function Run(k, anim){
  const dur=anim.Duration;
  if(dur===0)return Zero();
  else {
    const a=(ok) => {
      function loop(start){
        return(now) => {
          const t=now-start;
          anim.Compute(t);
          k();
          return t<=dur?void requestAnimationFrame((t_1) => {
            (loop(start))(t_1);
          }):ok();
        };
      }
      requestAnimationFrame((t) => {
        (loop(t))(t);
      });
    };
    return FromContinuations((_1, _2, _3) => a.apply(null, [_1, _2, _3]));
  }
}
function Anim(Item){
  return{$:0, $0:Item};
}
function Concat_1(xs){
  return Anim(Concat_2(map(List, xs)));
}
function get_Empty(){
  return Anim(Empty_1());
}
function BatchUpdatesEnabled(){
  return _c_47.BatchUpdatesEnabled;
}
function StartProcessor(procAsync){
  const st=[0];
  function work(){
    const _1=null;
    return Delay(() => Bind_1(procAsync, () => {
      const m=st[0];
      return Equals(m, 1)?(st[0]=0,Zero()):Equals(m, 2)?(st[0]=1,work()):Zero();
    }));
  }
  return() => {
    const m=st[0];
    if(Equals(m, 0)){
      st[0]=1;
      Start(work(), null);
    }
    else Equals(m, 1)?st[0]=2:void 0;
  };
}
let _c_39=Lazy((_i) => {
  Force(Error);
  return class OperationCanceledException extends Error {
    static {
      _c_39=_i(this);
    }
    ct;
    static New(ct){
      return new this("New", ct);
    }
    static New_1(message, inner, ct){
      return new this("New_1", message, inner, ct);
    }
    constructor(i, _1, _2, _3){
      let ct;
      if(i=="New"){
        ct=_1;
        i="New_1";
        _1="The operation was canceled.";
        _2=null;
        _3=ct;
      }
      if(i=="New_1"){
        const message=_1;
        const inner=_2;
        const ct_1=_3;
        super(message);
        this.inner=inner;
        this.ct=ct_1;
      }
    }
  };
});
function New_4(DynElem, DynFlags, DynNodes, OnAfterRender_1){
  const _1={
    DynElem:DynElem, 
    DynFlags:DynFlags, 
    DynNodes:DynNodes
  };
  SetOptional(_1, "OnAfterRender", OnAfterRender_1);
  return _1;
}
function OfSeq(data){
  const a=ofSeq_1(distinct(data));
  sortInPlace(a);
  return Build(a, 0, a.length-1);
}
function Enumerate(flip, t){
  function gen(t_1, spine){
    let t_2;
    while(true)
      {
        if(t_1==null)return spine.$==1?Some([spine.$0[0], [spine.$0[1], spine.$1]]):null;
        else if(flip){
          t_2=t_1;
          t_1=t_2.Right;
          spine=_c_13.Cons([t_2.Node, t_2.Left], spine);
        }
        else {
          t_2=t_1;
          t_1=t_2.Left;
          spine=_c_13.Cons([t_2.Node, t_2.Right], spine);
        }
      }
  }
  return unfold((_1) => gen(_1[0], _1[1]), [t, _c_13.Empty]);
}
function Build(data, min, max_1){
  if(max_1-min+1<=0)return null;
  else {
    const center=(min+max_1)/2>>0;
    return Branch(get(data, center), Build(data, min, center-1), Build(data, center+1, max_1));
  }
}
function Branch(node, left, right){
  const a=left==null?0:left.Height;
  const b=right==null?0:right.Height;
  let _1=Compare(a, b)===1?a:b;
  let _2=1+_1;
  return New_3(node, left, right, _2, 1+(left==null?0:left.Count)+(right==null?0:right.Count));
}
function Add(x, t){
  return Put((_1, _2) => _2, x, t);
}
function Put(combine, k, t){
  const p=Lookup(k, t);
  const t_1=p[0];
  return t_1==null?Rebuild(p[1], Branch(k, null, null)):Rebuild(p[1], Branch(combine(t_1.Node, k), t_1.Left, t_1.Right));
}
function Lookup(k, t){
  let spine=[];
  let t_1=t;
  let loop=true;
  while(loop)
    if(t_1==null)loop=false;
    else {
      const m=Compare(k, t_1.Node);
      if(m===0)loop=false;
      else m===1?(spine.unshift([true, t_1.Node, t_1.Left]),t_1=t_1.Right):(spine.unshift([false, t_1.Node, t_1.Right]),t_1=t_1.Left);
    }
  return[t_1, spine];
}
function Rebuild(spine, t){
  const h=(x_2) => x_2==null?0:x_2.Height;
  let t_1=t;
  for(let i=0, _1=length(spine)-1;i<=_1;i++){
    const m=get(spine, i);
    if(m[0]){
      const x=m[1];
      const l=m[2];
      if(h(t_1)>h(l)+1){
        if(h(t_1.Left)===h(t_1.Right)+1){
          const m_1=t_1.Left;
          t_1=Branch(m_1.Node, Branch(x, l, m_1.Left), Branch(t_1.Node, m_1.Right, t_1.Right));
        }
        else t_1=Branch(t_1.Node, Branch(x, l, t_1.Left), t_1.Right);
      }
      else t_1=Branch(x, l, t_1);
    }
    else {
      const x_1=m[1];
      const r=m[2];
      if(h(t_1)>h(r)+1){
        if(h(t_1.Right)===h(t_1.Left)+1){
          const m_2=t_1.Right;
          t_1=Branch(m_2.Node, Branch(t_1.Node, t_1.Left, m_2.Left), Branch(x_1, m_2.Right, r));
        }
        else t_1=Branch(t_1.Node, t_1.Left, Branch(x_1, t_1.Right, r));
      }
      else t_1=Branch(x_1, t_1, r);
    }
  }
  return t_1;
}
function Insert(elem, tree){
  const nodes=[];
  const oar=[];
  function loop(node){
    while(true)
      {
        if(!(node===null)){
          if(node!=null&&node.$==1)return nodes.push(node.$0);
          else if(node!=null&&node.$==2){
            const b=node.$1;
            const a=node.$0;
            loop(a);
            node=b;
          }
          else return node!=null&&node.$==3?node.$0(elem):node!=null&&node.$==4?oar.push(node.$0):null;
        }
        else return null;
      }
  }
  loop(tree);
  const arr=nodes.slice(0);
  let _1=New_4(elem, Flags(tree), arr, oar.length===0?null:Some((el) => {
    iter((f) => {
      f(el);
    }, oar);
  }));
  return _1;
}
function Updates(dyn){
  return MapTreeReduce((x) => x.NChanged, Const(), Map2Unit, dyn.DynNodes);
}
function Empty(e){
  return New_4(e, 0, [], null);
}
function Flags(a){
  return a!==null&&a.hasOwnProperty("flags")?a.flags:0;
}
function Static(attr){
  return _c_42.A3(attr);
}
function Dynamic(view, set_1){
  return _c_42.A1(new _c_53(view, set_1));
}
function EmptyAttr(){
  return _c_54.EmptyAttr;
}
function HasExitAnim(attr){
  const flag=2;
  return(attr.DynFlags&flag)===flag;
}
function GetExitAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetExitAnim(_2));
}
function HasEnterAnim(attr){
  const flag=1;
  return(attr.DynFlags&flag)===flag;
}
function GetEnterAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetEnterAnim(_2));
}
function HasChangeAnim(attr){
  const flag=4;
  return(attr.DynFlags&flag)===flag;
}
function GetChangeAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetChangeAnim(_2));
}
function AppendTree(a, b){
  if(a===null)return b;
  else if(b===null)return a;
  else {
    const x=_c_42.A2(a, b);
    SetFlags(x, Flags(a)|Flags(b));
    return x;
  }
}
function GetAnim(dyn, f){
  return Concat_1(map_1((n) => f(n, dyn.DynElem), dyn.DynNodes));
}
function Sync_1(elem, dyn){
  iter_2((d) => {
    d.NSync(elem);
  }, dyn.DynNodes);
}
function SetFlags(a, f){
  a.flags=f;
}
let _c_40=Lazy((_i) => {
  Force(_c_4);
  return class Attribute extends _c_4 {
    static {
      _c_40=_i(this);
    }
    name;
    fillWith;
    get Value(){
      return this.fillWith;
    }
    get Name(){
      return this.name;
    }
  };
});
let _c_41=Lazy((_i) => {
  Force(_c_4);
  return class Event extends _c_4 {
    static {
      _c_41=_i(this);
    }
    name;
    fillWith;
    get Value(){
      return this.fillWith;
    }
    get Name(){
      return this.name;
    }
  };
});
function Handler(name, callback){
  return Static((el) => {
    el.addEventListener(name, (d) =>(callback(el))(d), false);
  });
}
function OnAfterRender(callback){
  return _c_42.A4(callback);
}
function Dynamic_1(name, view){
  return Dynamic(view, (el) =>(v) => el.setAttribute(name, v));
}
function IntValueUnchecked(var_1){
  return ValueWith(IntApplyUnchecked(), var_1);
}
function Value(var_1){
  return ValueWith(StringApply(), var_1);
}
function FloatValueUnchecked(var_1){
  return ValueWith(FloatApplyUnchecked(), var_1);
}
function Checked(var_1){
  return ValueWith(BoolCheckedApply(), var_1);
}
function DateTimeValue(var_1){
  return ValueWith(DateTimeApplyUnchecked(), var_1);
}
function FileValue(var_1){
  return ValueWith(FileApplyUnchecked(), var_1);
}
function StringListValue(var_1){
  return ValueWith(StringListApply(), var_1);
}
function ValueWith(bind, var_1){
  const p=bind(var_1);
  return _c_42.Append(Static(p[0]), DynamicCustom(p[1], p[2]));
}
function DynamicCustom(set_1, view){
  return Dynamic(view, set_1);
}
let _c_42=Lazy((_i) => class Attr {
  static {
    _c_42=_i(this);
  }
  static Handler(event, q){
    return _c_42.HandlerImpl(event, q);
  }
  static Concat(xs){
    const x=ofSeqNonCopying(xs);
    return TreeReduce(EmptyAttr(), _c_42.Append, x);
  }
  static Create(name, value){
    return Static((el) => {
      el.setAttribute(name, value);
    });
  }
  static HandlerImpl(event, q){
    return Static((el) => {
      el.addEventListener(event, (d) =>(q(el))(d), false);
    });
  }
  static Append(a, b){
    return AppendTree(a, b);
  }
  static A4(onAfterRender){
    return Create_1(Attr, {$:4, $0:onAfterRender});
  }
  static A3(init_2){
    return Create_1(Attr, {$:3, $0:init_2});
  }
  static A1(Item){
    return Create_1(Attr, {$:1, $0:Item});
  }
  static A2(Item1, Item2){
    return Create_1(Attr, {
      $:2, 
      $0:Item1, 
      $1:Item2
    });
  }
});
let _c_43=Lazy((_i) => {
  Force(_c_4);
  return class AfterRender_1 extends _c_4 {
    static {
      _c_43=_i(this);
    }
    name;
    fillWith;
    get Value(){
      return this.fillWith;
    }
    get Name(){
      return this.name;
    }
  };
});
let _c_44=Lazy((_i) => {
  Force(_c_4);
  return class AfterRenderQ extends _c_4 {
    static {
      _c_44=_i(this);
    }
    name;
    fillWith;
    get Value(){
      return this.fillWith;
    }
    get Name(){
      return this.name;
    }
  };
});
function Choice1Of2(Item){
  return{$:0, $0:Item};
}
function Choice2Of2(Item){
  return{$:1, $0:Item};
}
function TreeReduce(defaultValue, reduction, array){
  const l=length(array);
  function loop(off){
    return(len) => {
      let _1;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_1=len,2):(_1=len,2)){
        case 0:
          return defaultValue;
        case 1:
          return get(array, off);
        case 2:
          const l2=len/2>>0;
          return reduction((loop(off))(l2), (loop(off+l2))(len-l2));
      }
    };
  }
  return(loop(0))(l);
}
function MapTreeReduce(mapping, defaultValue, reduction, array){
  const l=length(array);
  function loop(off){
    return(len) => {
      let _1;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_1=len,2):(_1=len,2)){
        case 0:
          return defaultValue;
        case 1:
          return mapping(get(array, off));
        case 2:
          const l2=len/2>>0;
          return reduction((loop(off))(l2), (loop(off+l2))(len-l2));
      }
    };
  }
  return(loop(0))(l);
}
function ofSeqNonCopying(xs){
  if(xs instanceof Array)return xs;
  else if(xs instanceof _c_13)return ofList(xs);
  else if(xs===null)return[];
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      if(typeof o=="object"&&isIDisposable(o))o.Dispose();
    }
  }
}
let _c_45=Lazy((_i) => class Updates_1 {
  static {
    _c_45=_i(this);
  }
  c;
  s;
  v;
  static Create(v){
    let var_1;
    var_1=null;
    var_1=_c_45.New(v, null, () => {
      let c;
      c=var_1.s;
      return c===null?(c=Copy(var_1.c()),var_1.s=c,WhenObsoleteRun(c, () => {
        var_1.s=null;
      }),c):c;
    });
    return var_1;
  }
  static New(Current, Snap, VarView){
    return Create_1(_c_45, {
      c:Current, 
      s:Snap, 
      v:VarView
    });
  }
});
let _c_46=Lazy((_i) => class ValueCollection extends _c_1 {
  static {
    _c_46=_i(this);
  }
  d;
  GetEnumerator(){
    return Get(map((kvp) => kvp.V, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
});
function New_5(PreviousNodes, Top){
  return{PreviousNodes:PreviousNodes, Top:Top};
}
function get_Empty_1(){
  return NodeSet(new _c_23("New_3"));
}
function FindAll(doc){
  const q=[];
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!=null&&_1.$==0){
            const b=_1.$1;
            const a=_1.$0;
            recF(0, a);
            _1=b;
          }
          else if(_1!=null&&_1.$==1){
            const el=_1.$0;
            _1=el;
            recI=1;
          }
          else if(_1!=null&&_1.$==2){
            const em=_1.$0;
            _1=em.Current;
          }
          else if(_1!=null&&_1.$==6){
            const x=_1.$0.Holes;
            return(((a_1) =>(a_2) => {
              iter_2(a_1, a_2);
            })(loopEN))(x);
          }
          else return null;
          break;
        case 1:
          q.push(_1);
          _1=_1.Children;
          recI=0;
          break;
      }
  }
  function loop(node){
    return recF(0, node);
  }
  function loopEN(el){
    return recF(1, el);
  }
  loop(doc);
  return NodeSet(new _c_23("New_2", q));
}
function NodeSet(Item){
  return{$:0, $0:Item};
}
function Filter(f, a){
  return NodeSet(Filter_1(f, a.$0));
}
function Except(a, a_1){
  return NodeSet(Except_1(a.$0, a_1.$0));
}
function ToArray(a){
  return ToArray_2(a.$0);
}
function Intersect(a, a_1){
  return NodeSet(Intersect_1(a.$0, a_1.$0));
}
function UseAnimations(){
  return _c_51.UseAnimations;
}
function Actions(a){
  return ConcatActions(choose((a_1) => a_1.$==1?Some(a_1.$0):null, ToArray_1(a.$0)));
}
function Finalize(a){
  iter_2((a_1) => {
    if(a_1.$==0)a_1.$0();
  }, ToArray_1(a.$0));
}
function ConcatActions(xs){
  const xs_1=ofSeqNonCopying(xs);
  const m=length(xs_1);
  if(m===0)return Const_1();
  else if(m===1)return get(xs_1, 0);
  else {
    const dur=max(map((anim) => anim.Duration, xs_1));
    const xs_2=map_1((x) => Prolong(dur, x), xs_1);
    return Def(dur, (t) => {
      iter_2((anim) => {
        anim.Compute(t);
      }, xs_2);
    });
  }
}
function List(a){
  return a.$0;
}
function Const_1(v){
  return Def(0, () => v);
}
function Def(d, f){
  return{Compute:f, Duration:d};
}
function Prolong(nextDuration, anim){
  const comp=anim.Compute;
  const dur=anim.Duration;
  const last=Create(() => anim.Compute(anim.Duration));
  return{Compute:(t) => t>=dur?last.f():comp(t), Duration:nextDuration};
}
let _c_47=Lazy((_i) => class Proxy {
  static {
    _c_47=_i(this);
  }
  static BatchUpdatesEnabled;
  static {
    this.BatchUpdatesEnabled=true;
  }
});
function Clear(a){
  a.splice(0, length(a));
}
function insufficient(){
  return FailWith("The input sequence has an insufficient number of elements.");
}
function mapiInPlace(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)arr[i]=f(i, arr[i]);
  return arr;
}
function mapInPlace(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)arr[i]=f(arr[i]);
}
function arrContains(item, arr){
  let c=true;
  let i=0;
  while(c&&i<length(arr))
    if(Equals(arr[i], item))c=false;
    else i=i+1;
  return!c;
}
function nonNegative(){
  return FailWith("The input must be non-negative.");
}
let _c_48=Lazy((_i) => class KeyCollection extends _c_1 {
  static {
    _c_48=_i(this);
  }
  d;
  GetEnumerator(){
    return Get(map((kvp) => kvp.K, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
});
let _c_49=Lazy((_i) => {
  Force(Error);
  return class ArgumentException extends Error {
    static {
      _c_49=_i(this);
    }
    static New_2(message){
      return new this("New_2", message);
    }
    constructor(i, _1){
      if(i=="New_2"){
        const message=_1;
        super(message);
      }
    }
  };
});
function concat_3(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push.apply(r, o[k_1]);
  return r;
}
let _c_50=Lazy((_i) => class $StartupCode_DomUtility {
  static {
    _c_50=_i(this);
  }
  static defaultWrap;
  static wrapMap;
  static rhtml;
  static rtagName;
  static rxhtmlTag;
  static {
    this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>", "gi");
    this.rtagName=new RegExp("<([\\w:]+)");
    this.rhtml=new RegExp("<|&#?\\w+;");
    const table=[1, "<table>", "</table>"];
    let _1=Object.fromEntries([["option", [1, "<select multiple='multiple'>", "</select>"]], ["legend", [1, "<fieldset>", "</fieldset>"]], ["area", [1, "<map>", "</map>"]], ["param", [1, "<object>", "</object>"]], ["thead", table], ["tbody", table], ["tfoot", table], ["tr", [2, "<table><tbody>", "</tbody></table>"]], ["col", [2, "<table><colgroup>", "</colgoup></table>"]], ["td", [3, "<table><tbody><tr>", "</tr></tbody></table>"]]]);
    this.wrapMap=_1;
    this.defaultWrap=[0, "", ""];
  }
});
let _c_51=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c_51=_i(this);
  }
  static UseAnimations;
  static CubicInOut;
  static {
    this.CubicInOut=_c_55.Custom((t) => {
      const t2=t*t;
      return 3*t2-2*(t2*t);
    });
    this.UseAnimations=true;
  }
});
function Append_1(x, y){
  return x.$==0?y:y.$==0?x:{
    $:2, 
    $0:x, 
    $1:y
  };
}
function ToArray_1(xs){
  const out=[];
  function loop(xs_1){
    while(true)
      {
        if(xs_1.$==1)return out.push(xs_1.$0);
        else if(xs_1.$==2){
          const y=xs_1.$1;
          const x=xs_1.$0;
          loop(x);
          xs_1=y;
        }
        else return xs_1.$==3?iter_2((v) => {
          out.push(v);
        }, xs_1.$0):null;
      }
  }
  loop(xs);
  return out.slice(0);
}
function Concat_2(xs){
  const x=ofSeqNonCopying(xs);
  return TreeReduce(Empty_1(), Append_1, x);
}
function Empty_1(){
  return _c_57.Empty;
}
let _c_52=Lazy((_i) => {
  Force(Error);
  return class KeyNotFoundException extends Error {
    static {
      _c_52=_i(this);
    }
    static New(){
      return new this("New");
    }
    static New_1(message){
      return new this("New_1", message);
    }
    constructor(i, _1){
      if(i=="New"){
        i="New_1";
        _1="The given key was not present in the dictionary.";
      }
      if(i=="New_1"){
        const message=_1;
        super(message);
      }
    }
  };
});
let _c_53=Lazy((_i) => class DynamicAttrNode extends _c_1 {
  static {
    _c_53=_i(this);
  }
  push;
  value;
  dirty;
  updates;
  get NChanged(){
    return this.updates;
  }
  NGetExitAnim(parent){
    return get_Empty();
  }
  NGetEnterAnim(parent){
    return get_Empty();
  }
  NGetChangeAnim(parent){
    return get_Empty();
  }
  NSync(parent){
    if(this.dirty){
      (this.push(parent))(this.value);
      this.dirty=false;
    }
  }
  constructor(view, push){
    super();
    this.push=push;
    this.value=void 0;
    this.dirty=false;
    this.updates=Map((x) => {
      this.value=x;
      this.dirty=true;
    }, view);
  }
});
let _c_54=Lazy((_i) => class Client {
  static {
    _c_54=_i(this);
  }
  static FloatApplyChecked;
  static FloatGetChecked;
  static FloatSetChecked;
  static FloatApplyUnchecked;
  static FloatGetUnchecked;
  static FloatSetUnchecked;
  static IntApplyChecked;
  static IntGetChecked;
  static IntSetChecked;
  static IntApplyUnchecked;
  static IntGetUnchecked;
  static IntSetUnchecked;
  static FileApplyUnchecked;
  static FileGetUnchecked;
  static FileSetUnchecked;
  static DateTimeApplyUnchecked;
  static DateTimeGetUnchecked;
  static DateTimeSetUnchecked;
  static StringListApply;
  static StringListGet;
  static StringListSet;
  static StringApply;
  static StringGet;
  static StringSet;
  static BoolCheckedApply;
  static EmptyAttr;
  static {
    this.EmptyAttr=null;
    this.BoolCheckedApply=(var_1) =>[(el) => {
      el.addEventListener("change", () => var_1.Get()!=el.checked?var_1.Set(el.checked):null);
    }, (_1) =>(_2) => _2!=null&&_2.$==1?void(_1.checked=_2.$0):null, Map(Some, var_1.View)];
    this.StringSet=(el) =>(s_8) => {
      el.value=s_8;
    };
    this.StringGet=(el) => Some(el.value);
    const g=StringGet();
    const s=StringSet();
    this.StringApply=(v) => ApplyValue(g, s, v);
    this.StringListSet=(el) =>(s_8) => {
      const options_=el.options;
      for(let i=0, _1=options_.length-1;i<=_1;i++)((() => {
        const option=options_.item(i);
        option.selected=arrContains(option.value, s_8);
      })());
    };
    this.StringListGet=(el) => {
      const selectedOptions=el.selectedOptions;
      return Some(ofSeq_1(delay(() => collect((i) =>[selectedOptions.item(i).value], range(0, selectedOptions.length-1)))));
    };
    const g_1=StringListGet();
    const s_1=StringListSet();
    this.StringListApply=(v) => ApplyValue(g_1, s_1, v);
    this.DateTimeSetUnchecked=(el) =>(i) => {
      el.value=(new Date(i)).toLocaleString();
    };
    this.DateTimeGetUnchecked=(el) => {
      let o;
      let m;
      const s_8=el.value;
      if(isBlank(s_8))return Some(-8640000000000000);
      else {
        o=0;
        const m_1=TryParse_1(s_8);
        let _1=m_1!=null&&m_1.$==1&&(o=m_1.$0,true);
        m=[_1, o];
        return m[0]?Some(m[1]):null;
      }
    };
    const g_2=DateTimeGetUnchecked();
    const s_2=DateTimeSetUnchecked();
    this.DateTimeApplyUnchecked=(v) => ApplyValue(g_2, s_2, v);
    this.FileSetUnchecked=() =>() => null;
    this.FileGetUnchecked=(el) => {
      const files=el.files;
      return Some(ofSeq_1(delay(() => map((i) => files.item(i), range(0, files.length-1)))));
    };
    const g_3=FileGetUnchecked();
    const s_3=FileSetUnchecked();
    this.FileApplyUnchecked=(v) => FileApplyValue(g_3, s_3, v);
    this.IntSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.IntGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank(s_8))return Some(0);
      else {
        const pd=+s_8;
        return pd!==pd>>0?null:Some(pd);
      }
    };
    const g_4=IntGetUnchecked();
    const s_4=IntSetUnchecked();
    this.IntApplyUnchecked=(v) => ApplyValue(g_4, s_4, v);
    this.IntSetChecked=(el) =>(i) => {
      const i_1=i.Input;
      return el.value!=i_1?void(el.value=i_1):null;
    };
    this.IntGetChecked=(el) => {
      let _1;
      let o;
      const s_8=el.value;
      if(isBlank(s_8))_1=(el.checkValidity?el.checkValidity():true)?_c_56.Blank(s_8):_c_56.Invalid(s_8);
      else {
        const m=(o=0,[TryParse(s_8, {get:() => o, set:(v) => {
          o=v;
        }}), o]);
        _1=m[0]?_c_56.Valid(m[1], s_8):_c_56.Invalid(s_8);
      }
      return Some(_1);
    };
    const g_5=IntGetChecked();
    const s_5=IntSetChecked();
    this.IntApplyChecked=(v) => ApplyValue(g_5, s_5, v);
    this.FloatSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.FloatGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank(s_8))return Some(0);
      else {
        const pd=+s_8;
        return isNaN(pd)?null:Some(pd);
      }
    };
    const g_6=FloatGetUnchecked();
    const s_6=FloatSetUnchecked();
    this.FloatApplyUnchecked=(v) => ApplyValue(g_6, s_6, v);
    this.FloatSetChecked=(el) =>(i) => {
      const i_1=i.Input;
      return el.value!=i_1?void(el.value=i_1):null;
    };
    this.FloatGetChecked=(el) => {
      let _1;
      const s_8=el.value;
      if(isBlank(s_8))_1=(el.checkValidity?el.checkValidity():true)?_c_56.Blank(s_8):_c_56.Invalid(s_8);
      else {
        const i=+s_8;
        _1=isNaN(i)?_c_56.Invalid(s_8):_c_56.Valid(i, s_8);
      }
      return Some(_1);
    };
    const g_7=FloatGetChecked();
    const s_7=FloatSetChecked();
    this.FloatApplyChecked=(v) => ApplyValue(g_7, s_7, v);
  }
});
let _c_55=Lazy((_i) => class Easing extends _c_1 {
  static {
    _c_55=_i(this);
  }
  transformTime;
  static Custom(f){
    return new Easing(f);
  }
  constructor(transformTime){
    super();
    this.transformTime=transformTime;
  }
});
function Filter_1(ok, set_1){
  return new _c_23("New_2", filter(ok, ToArray_2(set_1)));
}
function Except_1(excluded, included){
  const set_1=new _c_23("New_2", ToArray_2(included));
  set_1.ExceptWith(ToArray_2(excluded));
  return set_1;
}
function ToArray_2(set_1){
  const arr=create(set_1.Count, void 0);
  set_1.CopyTo(arr, 0);
  return arr;
}
function Intersect_1(a, b){
  const set_1=new _c_23("New_2", ToArray_2(a));
  set_1.IntersectWith(ToArray_2(b));
  return set_1;
}
function ApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    const onChange=() => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(!Equals(expectedValue.$0, v)&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    };
    el.addEventListener("change", onChange);
    el.addEventListener("input", onChange);
    el.addEventListener("keypress", onChange);
  }, (x) => {
    const _1=set_1(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function StringSet(){
  return _c_54.StringSet;
}
function StringGet(){
  return _c_54.StringGet;
}
function StringListSet(){
  return _c_54.StringListSet;
}
function StringListGet(){
  return _c_54.StringListGet;
}
function DateTimeSetUnchecked(){
  return _c_54.DateTimeSetUnchecked;
}
function DateTimeGetUnchecked(){
  return _c_54.DateTimeGetUnchecked;
}
function FileApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    el.addEventListener("change", () => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(expectedValue.$0!==v&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    });
  }, (x) => {
    const _1=set_1(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function FileSetUnchecked(){
  return _c_54.FileSetUnchecked;
}
function FileGetUnchecked(){
  return _c_54.FileGetUnchecked;
}
function IntSetUnchecked(){
  return _c_54.IntSetUnchecked;
}
function IntGetUnchecked(){
  return _c_54.IntGetUnchecked;
}
function IntSetChecked(){
  return _c_54.IntSetChecked;
}
function IntGetChecked(){
  return _c_54.IntGetChecked;
}
function FloatSetUnchecked(){
  return _c_54.FloatSetUnchecked;
}
function FloatGetUnchecked(){
  return _c_54.FloatGetUnchecked;
}
function FloatSetChecked(){
  return _c_54.FloatSetChecked;
}
function FloatGetChecked(){
  return _c_54.FloatGetChecked;
}
function IntApplyUnchecked(){
  return _c_54.IntApplyUnchecked;
}
function StringApply(){
  return _c_54.StringApply;
}
function FloatApplyUnchecked(){
  return _c_54.FloatApplyUnchecked;
}
function BoolCheckedApply(){
  return _c_54.BoolCheckedApply;
}
function DateTimeApplyUnchecked(){
  return _c_54.DateTimeApplyUnchecked;
}
function FileApplyUnchecked(){
  return _c_54.FileApplyUnchecked;
}
function StringListApply(){
  return _c_54.StringListApply;
}
function isBlank(s){
  return forall_1(IsWhiteSpace, s);
}
let _c_56=Lazy((_i) => class CheckedInput {
  static {
    _c_56=_i(this);
  }
  get Input(){
    return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
  static Blank(inputText){
    return Create_1(CheckedInput, {$:2, $0:inputText});
  }
  static Invalid(inputText){
    return Create_1(CheckedInput, {$:1, $0:inputText});
  }
  static Valid(value, inputText){
    return Create_1(CheckedInput, {
      $:0, 
      $0:value, 
      $1:inputText
    });
  }
});
function Children(elem, delims){
  let n;
  if(delims!=null&&delims.$==1){
    const a=[];
    n=delims.$0[0].nextSibling;
    while(n!==delims.$0[1])
      {
        a.push(n);
        n=n.nextSibling;
      }
    return DomNodes(a);
  }
  else {
    let _1=elem.childNodes.length;
    const o=elem.childNodes;
    let _2=init_1(_1, (a_1) => o[a_1]);
    return DomNodes(_2);
  }
}
function Except_2(a, a_1){
  const excluded=a.$0;
  return DomNodes(filter((n) => forall_2((k) =>!(n===k), excluded), a_1.$0));
}
function Iter(f, a){
  iter_2(f, a.$0);
}
function DocChildren(node){
  const q=[];
  function loop(doc){
    while(true)
      {
        if(doc!=null&&doc.$==2){
          const d=doc.$0;
          doc=d.Current;
        }
        else if(doc!=null&&doc.$==1)return q.push(doc.$0.El);
        else if(doc==null)return null;
        else if(doc!=null&&doc.$==5)return q.push(doc.$0);
        else if(doc!=null&&doc.$==4)return q.push(doc.$0.Text);
        else if(doc!=null&&doc.$==6){
          const x=doc.$0.Els;
          return(((a_1) =>(a_2) => {
            iter_2(a_1, a_2);
          })((a_1) => {
            if(a_1==null||a_1.constructor===Object)loop(a_1);
            else q.push(a_1);
          }))(x);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          loop(a);
          doc=b;
        }
      }
  }
  loop(node.Children);
  return DomNodes(ofSeqNonCopying(q));
}
function DomNodes(Item){
  return{$:0, $0:Item};
}
function IsWhiteSpace(c){
  return c.match(new RegExp("\\s"))!==null;
}
function TryParse_1(s){
  const d=Date.parse(s);
  return isNaN(d)?null:Some(d);
}
function TryParse_2(s, min, max_1, r){
  const x=+s;
  const ok=x===x-x%1&&x>=min&&x<=max_1;
  if(ok)r.set(x);
  return ok;
}
function Create(f){
  return New_6(false, f, forceLazy);
}
function forceLazy(){
  const v=this.v();
  this.c=true;
  this.v=v;
  this.f=cachedLazy;
  return v;
}
function cachedLazy(){
  return this.v;
}
let _c_57=Lazy((_i) => class $StartupCode_AppendList {
  static {
    _c_57=_i(this);
  }
  static Empty;
  static {
    this.Empty={$:0};
  }
});
function New_6(created, evalOrVal, force){
  return{
    c:created, 
    v:evalOrVal, 
    f:force
  };
}
OnLoad(() => {
  Main();
});
Start_1();

