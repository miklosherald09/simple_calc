import Pressable from '../dumb/Pressable'
import { useCalc } from '../../CalcContext'


function ButtonGroups() {

  const { temp, setOps, setVal, val, ops, refresh,  setTemp, setRefresh, clear } = useCalc()

  function _setVal(v){
    if(refresh){
      setVal("")
      setRefresh(false)
      setVal(String(v))
    }

    else{
      setVal((val || "") + String(v))
    }
  }

  function _setOps(o){
    setOps(o)
    setTemp(val)
    setRefresh(true)
  }

  function _calculate(){
    setVal(String( eval( temp + ops + val ) ))
  }

  function _perc(){
    setVal(String( eval(  val / 100 ) ))
  }
  
  function _negate(){
    setVal(String( eval(  val +" * -1" ) ))
  }

  return (
    <div className="button-groups">
      <div>
        <Pressable onPress={() => _setOps("+")} title={"+"}/>
        <Pressable onPress={() => _setOps("-")} title={"-"}/>
        <Pressable onPress={() => _setOps("*")} title={"x"}/>
      </div>
      <div>
        <Pressable onPress={() => _setOps("/")} title={"/"}/>
        <Pressable onPress={() => _setVal(".")} title={"."}/>
        <Pressable onPress={() => _perc()} title={"%"}/>
        <Pressable onPress={() => _negate()} title={"±"}/>
      </div>
      <div>
        <Pressable onPress={() => _setVal(1)} title={1} />
        <Pressable onPress={() => _setVal(2)} title={2} />
        <Pressable onPress={() => _setVal(3)} title={3}/>
      </div>
      <div>
        <Pressable onPress={() => _setVal(4)} title={4}/>
        <Pressable onPress={() => _setVal(5)} title={5}/>
        <Pressable onPress={() => _setVal(6)} title={6}/>
      </div>
      <div>
        <Pressable onPress={() => _setVal(7)} title={7}/>
        <Pressable onPress={() => _setVal(8)} title={8}/>
        <Pressable onPress={() => _setVal(9)} title={9}/>
      </div>
      <div>
        <Pressable onPress={() => clear()} title={"C"}/>
        <Pressable onPress={() => _setVal(0)} title={0}/>
        <Pressable onPress={() => _calculate()} title={"="}/>
      </div>
    </div>
  );
}

export default ButtonGroups;
