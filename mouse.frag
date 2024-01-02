// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    //color = vec3(st.x,st.y,abs(sin(u_time)));
	color = vec3(u_mouse.x/u_resolution.x,u_mouse.y/u_resolution.y,0.0);

    float distanceToMouse = distance(st, u_mouse/u_resolution);
    if (distanceToMouse<=0.01){
        color = vec3(1.,1.,1.);
    }

    gl_FragColor = vec4(color,1.0);
}