<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Graduation Certificate</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet" />

    <style>
        html {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        body {
            font-family: 'Lato', sans-serif;
        }

        .font-serif-header {
            font-family: 'Playfair Display', serif;
        }

        .font-script {
            font-family: 'Great Vibes', cursive;
        }

        /* Standard A4 Portrait Dimensions */
        .certificate-container {
            width: 210mm;
            height: 297mm;
            position: relative;
            background-color: #fff;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        /* Complex Border Design */
        .outer-border {
            position: absolute;
            top: 15mm;
            left: 15mm;
            right: 15mm;
            bottom: 15mm;
            border: 2px solid #0d3d56;
            /* Navy */
            z-index: 10;
        }

        .inner-border {
            position: absolute;
            top: 17mm;
            left: 17mm;
            right: 17mm;
            bottom: 17mm;
            border: 4px double #917640;
            /* Gold */
            z-index: 10;
        }

        /* Corner Ornaments (CSS Shapes) */
        .corner-ornament {
            position: absolute;
            width: 40px;
            height: 40px;
            border: 2px solid #0d3d56;
            z-index: 20;
        }

        .c-tl {
            top: 13mm;
            left: 13mm;
            border-right: none;
            border-bottom: none;
        }

        .c-tr {
            top: 13mm;
            right: 13mm;
            border-left: none;
            border-bottom: none;
        }

        .c-bl {
            bottom: 13mm;
            left: 13mm;
            border-right: none;
            border-top: none;
        }

        .c-br {
            bottom: 13mm;
            right: 13mm;
            border-left: none;
            border-top: none;
        }

        /* Watermark background */
        .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.03;
            width: 80%;
            pointer-events: none;
            z-index: 0;
        }

        @media print {
            body {
                background: none;
                padding: 0;
                display: block;
            }

            .certificate-container {
                box-shadow: none;
                margin: 0 auto;
                page-break-after: always;
            }
        }
    </style>
</head>

<body class="flex min-h-screen items-center justify-center bg-gray-200 py-10">

    <div class="certificate-container relative bg-white">

        <div class="outer-border"></div>
        <div class="inner-border"></div>
        <div class="corner-ornament c-tl"></div>
        <div class="corner-ornament c-tr"></div>
        <div class="corner-ornament c-bl"></div>
        <div class="corner-ornament c-br"></div>

        <img src="logo.png" class="watermark" alt="Watermark">

        <div class="absolute inset-0 z-30 flex flex-col items-center justify-between px-[25mm] py-[25mm]">

            <div class="mt-4 flex w-full flex-col items-center">
                <div class="mb-4 h-16">
                    <img src="{{ url(config('config.assets.logo')) }}" alt="Institution Logo"
                        class="h-full w-full object-contain">
                </div>

                <h2 class="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#0d3d56]">
                    {{ config('config.team.config.name') }}</h2>
                <h1 class="font-serif-header text-center text-5xl font-bold tracking-wide text-[#0d3d56]">Certificate of
                    Graduation</h1>

                <div class="mt-4 flex w-full items-center justify-center">
                    <div class="h-[1px] w-24 bg-yellow-600"></div>
                    <div class="mx-3 text-xl text-yellow-600">✦</div>
                    <div class="h-[1px] w-24 bg-yellow-600"></div>
                </div>
            </div>

            <div class="-mt-10 flex w-full flex-grow flex-col items-center justify-center text-center">
                <p class="font-serif-header mb-6 text-lg italic text-gray-500">This certificate is proudly presented to
                </p>

                <div class="font-script mb-6 px-4 text-[4rem] leading-none text-[#917640]">
                    #NAME#
                </div>

                <p class="max-w-lg text-sm leading-relaxed text-gray-700">
                    For the successful completion of the <span
                        class="font-bold text-[#0d3d56]">#GRADUATION_LEVEL#</span>
                    with admission number <strong>#ADMISSION_NUMBER#</strong> for the academic session
                    <strong>#PERIOD#</strong>.
                </p>

                <div class="mt-8 flex items-center gap-2">
                    <span class="text-xs uppercase tracking-widest text-gray-400">Awarded On</span>
                    <span class="font-bold text-[#0d3d56]">#CERTIFICATE_DATE#</span>
                </div>
            </div>


            <div class="mt-4 flex items-center justify-center">
                <img src="#QRCODE#" width="100" height="100">
            </div>

            <div class="mt-4 flex w-full items-center justify-between px-8">

                <div class="flex w-48 flex-col items-center">
                    <div class="mb-1 text-base text-[#0d3d56]">#PRINCIPAL_NAME#</div>
                    <div class="mb-2 h-[1px] w-full bg-[#0d3d56]"></div>
                    <div class="text-xs font-bold uppercase tracking-widest text-gray-500">Principal</div>
                </div>

                <div class="relative -top-2">
                    <img src="/images/certificate-badge.png" alt="Certificate Badge" class="w-20 object-contain">
                </div>

                <div class="flex w-48 flex-col items-center">
                    <div class="mb-1 text-base text-[#0d3d56]">#CHAIRMAN_NAME#</div>
                    <div class="mb-2 h-[1px] w-full bg-[#0d3d56]"></div>
                    <div class="text-xs font-bold uppercase tracking-widest text-gray-500">Chairman</div>
                </div>

            </div>

        </div>
    </div>

</body>

</html>
