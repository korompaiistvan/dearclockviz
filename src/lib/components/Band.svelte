<script lang="ts">
    import type {ActivityType, processedTimeInformation} from '$lib/types'
    
    export let dialCx1: number;
    export let dialCx2: number;
    export let dialCy: number;

    export let dialRadius: number;
    export let bandSpacing: number;
    export let dialPadding: number;
    export let timeGranularity: number;
    export let bandIndex: number;

    export let data: processedTimeInformation[];

    const radiusFactor = 1.2
    interface StyleStatement {
        r: number,
        fill: string
    }
    type StyleMap = {
        [key in ActivityType]: StyleStatement
    }
    const styleMap: StyleMap = {
        'sleep':        {r: 1 * radiusFactor, fill: '#c99da3'},
        'paidWork':     {r: 10 * radiusFactor, fill: '#2191FB'},
        'fun':          {r: 5 * radiusFactor, fill: '#BA274A'},
        'unpaidWork':   {r: 3 * radiusFactor, fill: '#CCAD8F'},
        'commute':      {r: 2 * radiusFactor, fill: 'grey'},
    }

    interface Dot {
        cx: number,
        cy: number,
        r: number,
        fill: string
    }
    let dots: Dot[] = [];
    // {cx, cy, r, fill}
    const minutesInADay = 60*24
    const rho =  dialRadius + dialPadding + bandIndex*bandSpacing // the radial coordinate is the same for all circles in the band
    for (let minuteOfDay=0; minuteOfDay<minutesInADay; minuteOfDay += timeGranularity) {
        const isAfternoon = minuteOfDay >= minutesInADay/2

        const minuteOfHalfDay = isAfternoon ? minuteOfDay-minutesInADay/2 : minuteOfDay
        let theta = minuteOfHalfDay/(minutesInADay/2) * 2 * Math.PI;
        if (!isAfternoon) {
            // im not sure about the order of these two operations
            // but 1 pi is a special case as its the same added and subtracted
            theta *= -1
            theta += Math.PI
        }

        const dialCx = isAfternoon ? dialCx1 : dialCx2
        const cx = Math.cos(theta) * rho + dialCx
        const cy = Math.sin(theta) * rho + dialCy

        const type = data.find(ti=> {return ti.start<=minuteOfDay && ti.end>minuteOfDay})!.type
        const style = styleMap[type]
        dots.push({cx, cy, ...style})
    }
</script>
<g>
    {#each dots as dot}
        <circle {...dot}/>
    {/each}
</g>