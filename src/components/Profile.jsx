import React from 'react';
const Profile = () =>
{
    return (
        <div className = "content"> 
        <div className = "slider">
        <img src="https://klike.net/uploads/posts/2019-01/1547367999_1.jpg"></img></div>
        <div className="person">
        <div className="ava"><img src='https://lh3.googleusercontent.com/-Z3-gR_L4lDc/XKhsGVYlhOI/AAAAAAAAGis/4mSOXa8SvLQzs6tdPeGPh1tv_o5bXoTHgCEwYBhgLKs4DAMBZVoDmLep0MImf5N71c5R4A6DJTUf1rzhoFvWrV-GloCDcSG-0XDQji0UoyxFiqNyjhBdIAnQzfaWTuH4MDTQU14TfMFTOE9rV11mex4QGxjaV_M7B_ImNqh5T8b9df0YpaD-9p_F9YBC_YEZD9mP8_4n1NwX6gS_CXXTPG41UDMc7m-D_Rp80mGZXbR-iLYYHN2OM2qI-2TixUwE9pTGBb_tVyPQVP3QOQRoQp4bL3BX-SUvQVi-J_eyY-2UKwgZNNdQdTH_xtS6ohZ1RBl9tyMMYUBt4nr_DJ8-JrtgVyZqm2ttRygo7hasdwLP-BArA1IScmGkCrDO7x3yaDn47sAOLVTfCwnZ5LMX6So_sTUpmLeoyh2RZazSOC4RyNt1Vw7-AYLqzeM1YGszW0OrBxwVsx6mRQuYDxth7FhV9r4NHQi2N44IRHK33_uEzUBVidd5ZeuSRlg4862Zkyx5n2ylSlwuJlUPgqaAtrw-cZ65L6GNxcdtjxL2zuxwJwU3DgKU1InZt_hx6icuELAIqe1u1q-OO7TbvYEMfTzCb4t9SYzi_zpt5uJeYogBsxhHJIxHMGNdFBNBCUeR0XB8w_zk4GvVd8yRUM5dJMPL_vPQF/w140-h139-p/IMG_20190322_181447.jpg' ></img>
        </div>
        <div className="ava-description">
          <div className="surname">
           Фамилия: Дунаева
          </div>
          <div className="name">
            Имя: Леся
          </div>
          <div className="male">
            Пол: женский
          </div>
          <div className="age">
            Возраст: 24
          </div>
          <div className="city">
            Город: село Большая Алешня
          </div>
        </div>
        </div>
      <div className="create-posts">
        <h1>Your post:</h1>
        <div className="create-posts-text-area">
        <div className="textarea" placeholder="Your text...">
          <input type="text"></input>
          </div>
        <div className="button">
          <input type="button" value="Send"></input>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="post">
          Post 1
        </div>
        <div className="post">
          Post 2
        </div>
        <div className="post">
          Post 3
        </div>
        <div className="post">
          Post 4
        </div>
      </div>
    </div>
    );
}

export default Profile;
