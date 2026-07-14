import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// All tech stack items with their icons and official URLs
// Perfect inverted pyramid: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack: TechItem[][] = [
  // Row 1 - 12 items (Core Languages, Unity, & Primary XR)
  [
    { name: "Unity", icon: "/icons/unity.svg", url: "https://unity.com" },
    { name: "C#", icon: "/icons/c_sharp.svg", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { name: "Java", icon: "/icons/java.svg", url: "https://www.java.com" },
    { name: "Kotlin", icon: "/icons/kotlin.svg", url: "https://kotlinlang.org" },
    { name: "ARCore", icon: "/icons/arcore.svg", url: "https://developers.google.com/ar" },
    { name: "ARKit", icon: "/icons/arkit.svg", url: "https://developer.apple.com/augmented-reality/arkit/" },
    { name: "Vuforia", icon: "/icons/vuforia.svg", url: "https://developer.vuforia.com" },
    { name: "Oculus SDK", icon: "/icons/oculus.svg", url: "https://developer.oculus.com" },
  ],
  // Row 2 - 10 items (Target Platforms & Backend/Networking)
  [
    { name: "Meta Quest", icon: "/icons/meta_quest.svg", url: "https://www.meta.com/quest/" },
    { name: "HoloLens", icon: "/icons/hololens.svg", url: "https://www.microsoft.com/en-us/hololens" },
    { name: "Android", icon: "/icons/android.svg", url: "https://developer.android.com" },
    { name: "iOS", icon: "/icons/ios.svg", url: "https://developer.apple.com/ios/" },
    { name: "Windows", icon: "/icons/windows.svg", url: "https://www.microsoft.com/windows" },
    { name: "Photon Engine", icon: "/icons/photon.svg", url: "https://www.photonengine.com" },
    { name: "Firebase", icon: "/icons/firebase.svg", url: "https://firebase.google.com" },
    { name: "REST API", icon: "/icons/rest_api.svg", url: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
  ],
  // Row 3 - 8 items (Tools, DevOps & IDES)
  [
    { name: "Git", icon: "/icons/git.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "/icons/github.svg", url: "https://github.com" },
    { name: "GitLab", icon: "/icons/gitlab.svg", url: "https://gitlab.com" },
    { name: "Docker", icon: "/icons/docker.svg", url: "https://docker.com" },
    { name: "Visual Studio", icon: "/icons/visual_studio.svg", url: "https://visualstudio.microsoft.com" },
    { name: "VS Code", icon: "/icons/vs_code.svg", url: "https://visualstudio.microsoft.com" },
    { name: "Android Studio", icon: "/icons/android_studio.svg", url: "https://developer.android.com/studio" },
    { name: "Blender", icon: "/icons/blender.svg", url: "https://blender.org" },
  ],
  // Row 4 - 6 items (Unity Core Systems & Optimization)
  [
    { name: "Addressables", icon: "/icons/unity.svg", url: "https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html" },
    { name: "Asset Bundles", icon: "/icons/unity.svg", url: "https://docs.unity3d.com/Manual/AssetBundlesIntro.html" },
    { name: "Assembly Definitions", icon: "/icons/unity.svg", url: "https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html" },
    { name: "Memory Profiling", icon: "/icons/unity.svg", url: "https://docs.unity3d.com/Manual/ProfilerWindow.html" },
    { name: "Scriptable Objects", icon: "/icons/unity.svg", url: "https://docs.unity3d.com/Manual/class-ScriptableObject.html" },
    { name: "Unity Input System", icon: "/icons/unity.svg", url: "https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/index.html" },
  ],
  // Row 5 - 4 items (Physics, Haptics & Specialty Physics)
  [
    { name: "Obi Physics", icon: "/icons/unity.svg", url: "http://obi.virtualmethodstudio.com/" },
    { name: "HTC Vive", icon: "/icons/htc_vive.svg", url: "https://www.vive.com" },
    { name: "Haply Haptics", icon: "/icons/haply.svg", url: "https://haply.com" },
    { name: "SenseGlove", icon: "/icons/senseglove.svg", url: "https://www.senseglove.com" },
  ],
  // Row 6 - 2 items (AI Integration Tip of the Pyramid)
  [
    { name: "Unity AI", icon: "/icons/unity.svg", url: "https://unity.com/solutions/ai" },
    { name: "Claude Code", icon: "/icons/claude_code.svg", url: "https://www.anthropic.com/claude" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
