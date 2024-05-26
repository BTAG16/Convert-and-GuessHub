namespace Hub

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating
open WebSharper.Sitelets

type IndexTemplate = Template<"wwwroot/index.html", ClientLoad.FromDocument>
type EndPoint = 
    | [<EndPoint "/">] Home
    | [<EndPoint "/guessing">] GuessingGame
    | [<EndPoint "/currency">] CurrencyConverter


module Server =
    let randomNumber = System.Random()

[<JavaScript>]
module Pages =
    open System

    let HomePage() =
        IndexTemplate.HomeP()
            .Doc()

    let GuessingGamePage() =
        let randomNumber = new System.Random()
        let secretNumber = Var.Create (randomNumber.Next(1, 101))
        let maxTries = 5
        let count, guessVar, resultVar = Var.Create 0, Var.Create 0, Var.Create ""

        let restartGame() =
            guessVar.Set(0)
            count.Set 0
            secretNumber.Set (randomNumber.Next(1, 101))

        let checkGuess () =
            let guess = int guessVar.Value
            if count.Value >= maxTries then
                let failedMesage = sprintf "Sorry, you have reached the maximum number of tries. The game has been restarted. The Secret Number was %d" secretNumber.Value
                restartGame()
                resultVar.Set failedMesage
            elif guess = secretNumber.Value then
                restartGame()
                resultVar.Set "Congratulations! You guessed the correct number. The game has been restarted."
            elif guess < secretNumber.Value then
                    count.Set (count.Value + 1)
                    resultVar.Set "Try a higher number."
                    guessVar.Set(0)
            else
                count.Set (count.Value + 1)
                resultVar.Set "Try a lower number."

        IndexTemplate.GuessingGame()
            .Guess(guessVar)
            .CheckGuess(fun _ -> checkGuess())
            .Result(resultVar.View)
            .Doc()

    let CurrencyConverterPage() =
        let amountVar, fromCurrencyVar, toCurrencyVar, resultVar, exchangeratesVar, showExchangeRatesVar = Var.Create 0.0, Var.Create "", Var.Create "", Var.Create "", Var.Create "", Var.Create false
        let random = System.Random()

        let nextGaussian (mean: float, stdDev: float) =
            let u1 = random.NextDouble()
            let u2 = random.NextDouble()
            let randStdNormal = sqrt(-2.0 * log u1) * cos(2.0 * Math.PI * u2)
            mean + stdDev * randStdNormal

        let shufflePrice (price: float) =
            let volatility = 0.01
            let drift = 0.0 
            let dt = 1.0
            let rand = nextGaussian (0.0, 1.0)
            let delta = drift * dt + volatility * sqrt(dt) * rand
            let newPrice = price * exp delta
            newPrice
        
        let exchangeRates = 
            dict [
                "USD", shufflePrice 1.0;"AED", shufflePrice 3.6725;"AFN", shufflePrice 71.873644; "ALL", shufflePrice 92.535822;"AMD", shufflePrice 387.559192;"ANG", shufflePrice 1.79;"AOA", shufflePrice 862.398965;"ARS", shufflePrice 864.75;"AUD", shufflePrice 1.509784;"AWG", shufflePrice 1.79;"AZN", shufflePrice 1.700932;"BAM", shufflePrice 1.803811;"BBD", shufflePrice 2;"BDT", shufflePrice 117.327239;"BGN", shufflePrice 1.803751;"BHD", shufflePrice 0.376;"BIF", shufflePrice 2861.40373;"BMD", shufflePrice 1;"BND", shufflePrice 1.350498;"BOB", shufflePrice 6.926527;"BRL", shufflePrice 5.143915;"BSD", shufflePrice 1;"BTN", shufflePrice 83.110225;"BWP", shufflePrice 13.591326;"BYN", shufflePrice 3.258688;"BZD", shufflePrice 2;"CAD", shufflePrice 1.367405;"CDF", shufflePrice 2760.63504;"CHF", shufflePrice 0.914572;"CLP", shufflePrice 908.83366;"CNY", shufflePrice 7.253669;"COP", shufflePrice 3832.4374;"CRC", shufflePrice 512.59939;"CUP", shufflePrice 24;"CVE", shufflePrice 101.69450;"CZK", shufflePrice 22.787519;"DJF", shufflePrice 177.721;"DKK", shufflePrice 6.88015;"DOP", shufflePrice 58.744236;"DZD", shufflePrice 134.61582;"EGP", shufflePrice 47.125572;"ERN", shufflePrice 15;"ETB", shufflePrice 57.501949;"EUR", shufflePrice 0.922275;"FJD", shufflePrice 2.268878;"FKP", shufflePrice 0.785489;"FOK", shufflePrice 6.880151;"GBP", shufflePrice 0.785489;"GEL", shufflePrice 2.729431;"GGP", shufflePrice 0.785489;"GHS", shufflePrice 14.711111;"GIP", shufflePrice 0.785489;"GMD", shufflePrice 64.645151;"GNF", shufflePrice 8583.4684;"GTQ", shufflePrice 7.770211;"GYD", shufflePrice 209.32560;"HKD", shufflePrice 7.812678;"HNL", shufflePrice 24.713353;"HRK", shufflePrice 6.948871;"HTG", shufflePrice 132.96877;"HUF", shufflePrice 355.17333;"IDR", shufflePrice 16044.45756;"ILS", shufflePrice 3.663675;"IMP", shufflePrice 0.785489;"INR", shufflePrice 83.110247;"IQD", shufflePrice 1311.154332;"IRR", shufflePrice 42085.32797;"ISK", shufflePrice 138.20881;"JEP", shufflePrice 0.785489;"JMD", shufflePrice 155.955573;"JOD", shufflePrice 0.709;"JPY", shufflePrice 157.040611;"KES", shufflePrice 131.920052;"KGS", shufflePrice 88.100617;"KHR", shufflePrice 4086.030115;"KID", shufflePrice 1.509781;"KMF", shufflePrice 453.7289;"KRW", shufflePrice 1365.910473;"KWD", shufflePrice 0.307004;"KYD", shufflePrice 0.833333;"KZT", shufflePrice 443.228278;"LAK", shufflePrice 21637.15720;"LBP", shufflePrice 89500;"LKR", shufflePrice 299.96255;"LRD", shufflePrice 193.391951;"LSL", shufflePrice 18.405536;"LYD", shufflePrice 4.840018;"MAD", shufflePrice 9.951317;"MDL", shufflePrice 17.716725;"MGA", shufflePrice 4428.262128;"MKD", shufflePrice 56.689569;"MMK", shufflePrice 2101.17502;"MNT", shufflePrice 3413.249018;"MOP", shufflePrice 8.047058;"MRU", shufflePrice 39.919486;"MUR", shufflePrice 46.232638;"MVR", shufflePrice 15.443748;"MWK", shufflePrice 1745.078091;"MXN", shufflePrice 16.701898;"MYR", shufflePrice 4.714021;"MZN", shufflePrice 63.386026;"NAD", shufflePrice 18.405536;"NGN", shufflePrice 1444.81095;"NIO", shufflePrice 36.817669;"NOK", shufflePrice 10.587896;"NPR", shufflePrice 132.976361;"NZD", shufflePrice 1.634515;"OMR", shufflePrice 0.384497;"PAB", shufflePrice 1;"PEN", shufflePrice 3.732947;"PGK", shufflePrice 3.85829;"PHP", shufflePrice 58.197447;"PKR", shufflePrice 278.192827;"PLN", shufflePrice 3.928027;"PYG", shufflePrice 7499.15795;"QAR", shufflePrice 3.64;"RON", shufflePrice 4.588111;"RSD", shufflePrice 107.95536;"RUB", shufflePrice 89.670486;"RWF", shufflePrice 1312.422132;"SAR", shufflePrice 3.75;"SBD", shufflePrice 8.360711;"SCR", shufflePrice 14.423239;"SDG", shufflePrice 510.928659;"SEK", shufflePrice 10.668197;"SGD", shufflePrice 1.350499;"SHP", shufflePrice 0.785489;"SLE", shufflePrice 22.661259;"SLL", shufflePrice 22661.259243;"SOS", shufflePrice 571.601821;"SRD", shufflePrice 32.417134;"SSP", shufflePrice 1757.3791;"STN", shufflePrice 22.595705;"SYP", shufflePrice 12892.985817;"SZL", shufflePrice 18.405536;"THB", shufflePrice 36.67319;"TJS", shufflePrice 10.897007;"TMT", shufflePrice 3.500128;"TND", shufflePrice 3.120681;"TOP", shufflePrice 2.338537;"TRY", shufflePrice 32.231538;"TTD", shufflePrice 6.764607;"TVD", shufflePrice 1.509781;"TWD", shufflePrice 32.214867;"TZS", shufflePrice 2600.523481;"UAH", shufflePrice 40.131242;"UGX", shufflePrice 3815.899851;"UYU", shufflePrice 38.350548;"UZS", shufflePrice 12726.307347;"VES", shufflePrice 36.5129;"VND", shufflePrice 25483.879592;"VUV", shufflePrice 119.851356;"WST", shufflePrice 2.73206;"XAF", shufflePrice 604.971867;"XCD", shufflePrice 2.7;"XDR", shufflePrice 0.756618;"XOF", shufflePrice 604.971867;"XPF", shufflePrice 110.056761;"YER", shufflePrice 250.296867;"ZAR", shufflePrice 18.405579;"ZMW", shufflePrice 26.450294;"ZWL", shufflePrice 13.224;
            ]

        let ConvertCurrency (amount: float) (fromCurrency: string) (toCurrency: string) =
            async {
                match exchangeRates.TryGetValue fromCurrency, exchangeRates.TryGetValue toCurrency with
                    | (true, fromRate), (true, toRate) ->
                        let fromRate = exchangeRates.[fromCurrency.ToUpper()]
                        let toRate = exchangeRates.[toCurrency.ToUpper()]
                        let convertedAmount = amount * (toRate / fromRate)
                        return Some convertedAmount
                    | _, _ ->
                        return None
            }

        let convert () =
            async {
                let amount = amountVar.Value
                let fromCurrency = fromCurrencyVar.Value.ToUpper()
                let toCurrency = toCurrencyVar.Value.ToUpper()
                let! result = ConvertCurrency amount fromCurrency toCurrency
                match result with
                | Some convertedAmount -> resultVar.Set(sprintf "%.2f %s = %.2f %s" amount fromCurrency convertedAmount toCurrency)
                | None -> resultVar.Set("Conversion failed.")
            } |> Async.Start

        let displayExchangeRates () =
            let rates =
                exchangeRates
                |> Seq.map (fun kvp -> sprintf "%s : %.4f" kvp.Key kvp.Value)
                |> String.concat "\n"
            exchangeratesVar.Update(fun _ -> rates)
            showExchangeRatesVar.Set(true)

        let hideExchangeRates () =
            exchangeratesVar.Set("")
            showExchangeRatesVar.Set(false)

        let toggleExchangeRates () =
            if showExchangeRatesVar.Value then
                hideExchangeRates()
            else
                displayExchangeRates()


        IndexTemplate.CurrencyConverter()
            .Amount(amountVar)
            .FromCurrency(fromCurrencyVar)
            .ToCurrency(toCurrencyVar)
            .ConvertAction(fun _ -> convert())
            .DisplayRatesAction(fun _ -> toggleExchangeRates())
            .Conversion(resultVar.View)
            .Rates(exchangeratesVar.View)
            .Doc()

[<JavaScript>]
module Client =
    let router = Router.Infer<EndPoint>()
    let currentPage = Router.InstallHash Home router

    [<SPAEntryPoint>]
    let Main =
        let renderInnerPage (currentPage: Var<EndPoint>) =
            currentPage.View.Map (fun link ->
                match link with
                | Home -> Pages.HomePage()
                | GuessingGame -> Pages.GuessingGamePage()
                | CurrencyConverter -> Pages.CurrencyConverterPage()
            )
            |> Doc.EmbedView

        IndexTemplate()
            .Home("/")
            .Guessing("/#/guessing")
            .Currency("/#/currency")
            .PageContent(renderInnerPage currentPage)
            .Bind()