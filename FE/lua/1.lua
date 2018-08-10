tab1={key1='value1',key2='value2',key3}
for k,v in pairs(tab1) do
   -- print(k.."__"..v)
end
    --do sth
function maximum( a )
    local mi=1
    local m=a[mi]
    for i,val in ipairs(a) do
        if val>m then 
            mi=i
            m=val
        end
    end
    return m,mi
end
--print(maximum({8,10,23,12,5}))
function average( ... )
    local result=0
    for i,v in ipairs({...}) do
      result=result+v;
    end
  --  print('个数  '..#{...});
    return result/#{...}
end
--print("平均值为",average(10,5,3,4,5,6))
do  
    function foo(...)  
    print(select("#",...));
    print(#{...})
        for i = 1, select('#', ...) do  -->获取参数总数
            local arg = select(i, ...); -->读取参数
            print("arg", arg);  
        end  
    end  
  
    foo(1, 2, 3,nil, 4);  
end