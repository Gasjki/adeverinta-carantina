let templateString = `
    <style>
        .page {
            width: 21cm;
            height: 29.7cm;
            font-size: 12px;
        }

        body, .page {
            margin: 0;
        }

        .text-center {
            text-align: center;
        }
    </style>
    <div class="page">
        <h2 class="text-center" style="width: 85%">Declaratie pe proprie raspundere</h2>
        <table style="width: 85%">
            <tr>
                <td style="width: 25%;font-size:13px"><b>Subsemnatul</b></td>
                <td colspan="3" style="width: 55%;border-bottom: 0.1px solid #000;font-size:13px">{{fullName}}</td>
                <td style="width: 20%"></td>
            </tr>
            <tr>
                <td style="width: 25%;font-size:13px"><b>Domiciliat în</b></td>
                <td colspan="3" style="width: 55%;border-bottom: 0.1px solid #000;font-size:13px">{{resident}}</td>
                <td style="width: 20%"></td>
            </tr>
            <tr>
                <td style="width: 25%;font-size:13px"><b>Cu reședința în</b></td>
                <td colspan="3" style="width: 55%;border-bottom: 0.1px solid #000;font-size:13px">{{residence}}</td>
                <td style="width: 20%"></td>
            </tr>
            <tr>
                <td style="width: 25%;font-size:13px"><b>Născut/născută în data de</b></td>
                <td style="width: 15%;border-bottom: 0.1px solid #000;text-align: center;font-size:13px">{{birthDate}}</td>
                <td style="width: 15%; text-align: center;font-size:13px"><b>în localitatea</b></td>
                <td style="width: 45%;border-bottom: 0.1px solid #000;font-size:13px">{{city}}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: bold;text-align: justify; font-size:11px">Declar pe proprie răspundere, cunoscând prevederile articolului 326 din Codul Penal privind falsul în declarații, că mă deplasez în afara locuinței, din următorul motiv:</td>
            </tr>
        </table>
        <div style="width: 85%">
            <h3><b>1. În intervalul orar:</b> {{startingHour}} - {{endingHour}}</h3>
            <p style="text-align: justify">
                <span style="padding: 3px 0; display: block">{{reason_1}} a) deplasarea în interes profesional, inclusiv între locuință, gospodărie și locul/locurile de desfășurare a activității profesionale și înapoi;</span>
                <span style="padding: 3px 0; display: block">{{reason_2}} b) deplasarea pentru asigurarea de bunuri care acoperă necesitățile de bază ale persoanelor și animalelor de companie/domestice, precum și bunuri necesare desfășurării activității profesionale, pentru persoanele cu vârsta peste 65 de ani în intervalul orar 10:00 - 14:00, iar pentru persoanele cu vârsta sub 65 de ani, în intervalele orare 06:00 - 10:00, respectiv 14:00 - 20:00;</span>
                <span style="padding: 3px 0; display: block">{{reason_3}} c) deplasarea pentru asistență medicală care nu poate fi amânată și nici realizată de la distanță;</span>
                <span style="padding: 3px 0; display: block">{{reason_4}}d) deplasările scurte, în apropierea locuinței/gospodăriei, legate de activitatea fizică individuală a persoanelor (cu excluderea oricăror activități sportive de echipă), cât și pentru nevoile animalelor de companie/domestice;</span>
                <span style="padding: 3px 0; display: block">{{reason_5}} e) deplasarea în scopul donării de sânge, la centrele de transfuzie sanguină;</span>
                <span style="padding: 3px 0; display: block">{{reason_6}} f) deplasarea în scop umanitar sau de voluntariat;</span>
                <span style="padding: 3px 0; display: block">{{reason_7}} g) deplasarea pentru realizarea de activități agricole;</span>
                <span style="padding: 3px 0; display: block">{{reason_8}} h) deplasarea producătorilor agricoli pentru comercializarea de produse agroalimentare;</span>
                <span style="padding: 3px 0; display: block">{{reason_9}} i) îngrijirea sau administrarea unei proprietăți din alta localitate;</span>
                <span style="padding: 3px 0; display: block">{{reason_10}} j) participarea la programe sau proceduri în centrele de tratament;</span>
                <span style="padding: 3px 0; display: block">{{reason_11}} k) pentru achiziția, service-ul, efectuarea ITP sau alte operațiuni de întreținere a vehiculelor;</span>
                <span style="padding: 3px 0; display: block">{{reason_12}} l) eliberarea de documente necesare pentru obținerea unor drepturi prevăzute de lege;</span>
                <span style="padding: 3px 0; display: block">{{reason_13}} m) alte motive justificative precum: îngrijirea / însoțirea copiilor / membrilor de familie, îngrijirea unei rude / afin sau persoană aflată în întreținere, asistență persoanelor vârstnice, bolnave sau cu dizabilități ori deces al unui membru de familie;</span>
                <span style="padding: 3px 0; display: block">{{reason_14}} n) participarea la activități religioase.</span>
                <span style="padding: 3px 0; display: block">{{reason_15}} o) deplasări ale persoanelor care sunt în tranzit sau efectuează călătorii al căror interval orar se suprapune cu perioada interdicției, cum ar fi cele efectuate cu avionul, trenul, autocare sau alte mijloace de transport de persoane și care poate fi dovedit prin bilet sau orice altă modalitate de achitare a călătoriei;</span>
                <span style="padding: 3px 0; display: block">{{reason_16}} p) deplasări ale persoanelor pentru administrare de vaccin împotriva SARS-CoV-2.</span>
            </p>
            <p style="font-size: 12px;text-align: justify">În intervalul orar 22.00-06.00, circulația persoanelor în afara locuinței/gospodăriei este permisă numai pentru motivele prevăzute la pct.1, lit.a), c), m) și o). </p>
            <h3><b>2. Intrarea/ieșire în/din localitatea carantinată</b></h3>
            <p style="text-align: justify">
                <span style="padding: 3px 0; display: block">{{extra_reason_1}} a) transportul de marfă indiferent de natura acestuia, al materiilor prime și resurselor necesare desfășurării activităților economice în localitatea carantinată, precum și pentru aprovizionarea populației;</span>
                <span style="padding: 3px 0; display: block">{{extra_reason_2}} b) persoanele care nu locuiesc în zonele carantinate, dar care desfășoară activități economice sau în domeniul apărării, ordinii publice, securității naționale, sanitare, veterinare, situațiilor de urgență, administrație publice, a asistenței și protecției sociale, judiciare, serviciilor de utilitate publică, agriculturii, comerț și alimentație publică, comunicațiilor și transporturilor;</span>
                <span style="padding: 3px 0; display: block">{{extra_reason_3}} c) persoanele care locuiesc în zonele carantinate și desfășoară activitatea profesională în afara zonei carantinate;</span>
                <span style="padding: 3px 0; display: block">{{extra_reason_4}} d) persoanele care realizează activități agricole sau pentru comercializarea de produse agroalimentare;</span>
                <span style="padding: 3px 0; display: block">{{extra_reason_5}} e) deplasarea din alte motive justificate, precum îngrijirea/însoțirea copiilor/membrilor de familie, îngrijirea unei/unui rude/afin sau a unei persoane aflate în întreținere, asistența persoanelor vârstnice, bolnave sau cu dizabilități, decesul unui membru de familie;</span>
                <span style="padding: 3px 0; display: block">{{extra_reason_6}} f) deplasarea pentru asistență medicală care nu poate fi amânată și nici realizată de la distanță;</span>
                <span style="padding: 3px 0; display: block">{{extra_reason_7}} g) urgențe medicale.</span>
            </p>
            <table style="padding: 3px 35px; margin-top: -15px; font-size: 15px">
                <tbody>
                    <tr>
                        <td style="width: 10%; vertical-align: middle"></td>
                        <td style="width: 15%;text-align: center; vertical-align: middle"><b>Dată:</b></td>
                        <td style="width: 15%; vertical-align: middle">{{date}}</td>
                        <td style="width: 10%; vertical-align: middle"></td>
                        <td style="width: 15%;text-align: center; vertical-align: middle"><b>Semnătura:</b></td>
                        <td style="width: 25%; vertical-align: middle"><img src="{{signature}}" style="width: 100%;"/></td>
                        <td style="width: 10%; vertical-align: middle"></td>
                    </tr>     
                </tbody>
            </table>
        </div>
    </div>
`;