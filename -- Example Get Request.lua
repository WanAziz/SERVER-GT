local requestInfo = {
    url = "http://64.112.125.136:3000"
}
fileTxt = "aaa.txt"
codebw = "a" --selain f
minusTuru = -2000
waktuTuru = 15 --menit

function rest()
    waktuBefore = tonumber(os.date('%M'))
    log("TURU")
    while true do 
        waktuNow = tonumber(os.date('!%M'))
        if waktuNow < waktuBefore then 
            waktuNow = waktuNow + 60 
        end

        sleep(5000)

        if waktuNow - waktuBefore == waktuTuru then
            break
        end
    end
end

while true do
    response = httpReq(requestInfo)
    if response.body ~= nil then
        if tonumber(response.body) < minusTuru then 
            ::tulisUlangAwal::
            awal = writeFile(fileTxt, codebw)
            sleep(20)
            if awal == false then
                goto tulisUlangAwal
            end
    
            rest()
    
            ::tulisUlangAkhir::
            akhir = writeFile(fileTxt, "f")
            sleep(20)
            if akhir == false then
                goto tulisUlangAkhir
            end
        end
    end
    sleep(15000)
end