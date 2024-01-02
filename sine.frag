#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.1, pct, st.y) -
          smoothstep( pct, pct+0.1, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    // Smooth interpolation between 0.1 and 0.9
    //float y = step(0.7,st.x);
    //float y = smoothstep(0.2,0.7,st.x);
    float y = 0.5*(1.+sin(3.*PI*u_time+st.x*10.0));
    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(1.0,0.0,0.0);

    gl_FragColor = vec4(color,1.0);
}