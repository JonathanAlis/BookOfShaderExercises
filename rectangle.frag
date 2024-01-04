#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 rectangle(in vec2 from00, in vec2 from11, vec3 color){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec2 bl = step(from00,st);       // bottom-left
    vec2 tr = step(from11,1.0-st);   // top-right
    vec3 cor = vec3(bl.x * bl.y * tr.x * tr.y)*color;

    return cor;

}

vec3 rect_outline(in vec2 from00, in vec2 from11, vec3 color, float width){
    vec3 cor = rectangle(from00-vec2(width),from11-vec2(width), color);
    return cor;
}
void main(){
    vec3 color1 = rectangle(vec2(0.2,0.3), vec2(0.5,0.5), vec3(1.0,1.0,1.0));
    vec3 color2 = rectangle(vec2(0.5,0.5), vec2(0.3,0.2), vec3(1.0,0.0,1.0));
    vec3 color3 = rectangle(vec2(0.5,0.3), vec2(0.3,0.5), vec3(1.0,1.0,0.0));
    vec3 color4 = rectangle(vec2(0.2,0.5), vec2(0.5,0.2), vec3(0.0,1.0,1.0));

    vec3 outline1 = rect_outline(vec2(0.2,0.3), vec2(0.5,0.5), vec3(1.0,0.0,0.0), 0.01);
    gl_FragColor = vec4(color1+color2+color3+color4+outline1,1.0);
}