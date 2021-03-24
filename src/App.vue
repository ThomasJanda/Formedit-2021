<template>
    <div id="app" class="app">
        <div class="app-top" v-bind:style="{height: panelTop + 'px' }"><atomsContainer>top</atomsContainer></div>
        <div class="app-left" v-on:dragover="dragover" v-on:drop="drop" v-bind:style="{width: calcPanelWidthLeft + 'px', top:panelTop + 'px', bottom:panelBottom + 'px' }"><atomsContainer><atomsButton>TEST</atomsButton></atomsContainer></div>
        <div id="app-panel" class="app-panel" v-on:dragover="dragover" v-on:drop="drop" v-bind:style="{top: panelTop + 'px', left: panelLeft + 'px', bottom: panelBottom + 'px', right: panelRight + 'px' }">
            <organismsTab v-bind:fetabs="fetabs" feselectedId="1"></organismsTab>
        </div>
        <div class="app-right" v-on:dragover="dragover" v-on:drop="drop" v-bind:style="{width: calcPanelWidthRight + 'px', top:panelTop + 'px', bottom:panelBottom + 'px' }"><atomsContainer>right</atomsContainer></div>
        <div class="app-bottom" v-bind:style="{height: panelBottom + 'px' }"><atomsContainer>bottom</atomsContainer></div> 
        <div draggable="true" id="app-sizer-left" class="app-sizer-left" v-on:dragover="dragover" v-on:drop="drop" v-on:dragstart="dragStart" v-on:drag="drag" v-bind:style="{left: calcPanelWidthLeft + 'px', top:panelTop + 'px', bottom:panelBottom + 'px', width: sizerWidth + 'px' }"></div>
        <div draggable="true" id="app-sizer-right" class="app-sizer-right" v-on:dragover="dragover" v-on:drop="drop" v-on:dragstart="dragStart" v-on:drag="drag" v-bind:style="{right: calcPanelWidthRight + 'px', top:panelTop + 'px', bottom:panelBottom + 'px', width: sizerWidth + 'px' }"></div>
    </div>
</template>

<script>
import atomsContainer from '@/app/ui/atoms/Container.vue'
import atomsButton from '@/app/ui/atoms/Button.vue'
import organismsTab from '@/app/ui/organisms/Tab.vue'

export default {
    name: 'app',
    data: function() {
        return {
            panelTop:25,
            panelLeft:200,
            panelRight:300,
            panelBottom:20,
            sizerWidth:15,

            fetabs: [
                {
                    id:1,
                    text:"Visual Editor",
                    content:"c1"
                },
                {
                    id:2,
                    text:"Javascript",
                    content:"c2"
                },
                {
                    id:3,
                    text:"Stylesheet",
                    content:"c3"
                }

            ],
        }
    },
    computed: {
        calcPanelWidthLeft: function() {
            return this.panelLeft - this.sizerWidth;
        },
        calcPanelWidthRight: function() {
            return this.panelRight - this.sizerWidth;
        },
    },
    methods: {
        dragStart: function(event) {
            event.dataTransfer.setData("text", JSON.stringify( {id: event.target.id, clientX: event.clientX}) );
            event.dataTransfer.effectAllowed = "move";
            event.target.classList.add('drag');
        },
        dragover: function(event)
        {
            let id = JSON.parse(event.dataTransfer.getData("text")).id;
            if(id==="app-sizer-left" || id==="app-sizer-right")
                event.preventDefault();
        },
        drag: function(event) {
            let id = JSON.parse(event.dataTransfer.getData("text")).id;
            if(id==="app-sizer-left" || id==="app-sizer-right")
            {
                event.target.style.top = this.panelTop;
            }
            console.log(event);
        },
        drop: function(event) {
            let id = JSON.parse(event.dataTransfer.getData("text")).id;
            if(id==="app-sizer-left" || id==="app-sizer-right")
            {
                event.preventDefault();
                let clientX = JSON.parse(event.dataTransfer.getData("text")).clientX;
                let clientWidth = document.getElementById('app-panel').clientWidth;
                document.getElementById(id).classList.remove('drag');

                if(id==="app-sizer-left")
                {
                    /* calculate new left */
                    let result = this.panelLeft + event.clientX - clientX;
                    if(result < 100)
                        result = 100;

                    let max = (this.panelLeft + clientWidth);
                    if(result > max)
                        result = max;
                    
                    this.panelLeft = result;
                }
                else if(id==="app-sizer-right")
                {
                    /* calculate new right */
                    let result = this.panelRight + clientX - event.clientX;
                    if(result < 100)
                        result = 100;

                    let max = (this.panelRight + clientWidth);
                    if(result > max)
                        result = max;
                    
                    this.panelRight = result;
                }
            }
        }
    },
    components: { atomsContainer,atomsButton,organismsTab }
}
</script>

<style lang="scss" scoped>
    div.app
    {
        min-width:300px;
        min-height:300px;
        background-color:green;
        position:fixed;
        height:100%;
        width:100%;

        > div 
        {
            border:1px solid black;
            box-sizing: border-box;
            padding:0;
            margin:0;
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;

            &.app-top
            {
                bottom:auto;
            }
            &.app-bottom
            {
                top:auto;
            }
            &.app-left
            {
                right:auto;
            }
            &.app-right
            {
                left:auto;
            }
            &.app-sizer-left
            {
                right:auto;
                z-index:99;
                background-color:lightblue;
                cursor:ew-resize;
                &.drag 
                {
                    background-color:blue;
                }
            }
            &.app-sizer-right
            {
                left:auto;
                z-index:99;
                background-color:lightblue;
                cursor:ew-resize;
                &.drag 
                {
                    background-color:blue;
                }
            }
        }
    
    }
    
</style>